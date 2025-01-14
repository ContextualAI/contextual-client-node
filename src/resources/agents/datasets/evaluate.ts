// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DatasetsAPI from './datasets';
import { type Response } from '../../../_shims/index';

export class Evaluate extends APIResource {
  /**
   * Create a new evaluation `Dataset` for the specified `Agent` using the provided
   * JSONL file. A `Dataset` is a versioned collection of samples conforming to a
   * particular schema, and can be used to store `Evaluation` test-sets and retrieve
   * `Evaluation` results.
   *
   * Each `Dataset` is versioned and validated against its schema during creation and
   * subsequent updates. The provided `Dataset` file must conform to the schema
   * defined for the `dataset_type`.
   *
   * File schema for `dataset_type` `evaluation_set` is a JSONL or CSV file where
   * each line is one JSON object with the following keys:
   *
   * - `prompt` (required, `string`): Prompt or question
   *
   * - `response` (optional, `string`): Optional response to evaluate
   *
   * - `reference` (required, `string`): Required reference or ground truth response
   *
   * - `guideline` (optional, `string`): Optional evaluation guidelines
   *
   * - `knowledge` (optional, `string`): Optional retrieved context for evaluation,
   *   as a list of string text chunks
   */
  create(
    agentId: string,
    body: EvaluateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.CreateDatasetResponse> {
    return this._client.post(
      `/agents/${agentId}/datasets/evaluate`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Stream the raw content of an evaluation `Dataset` version. If no version is
   * specified, the latest version is used.
   *
   * The `Dataset` content is downloaded in batches. Batch size can be configured to
   * meet specific processing requirements.
   *
   * Returns a `StreamingResponse`, an asynchronous stream of `Dataset` content
   * with: - Content-Type: application/octet-stream - Content-Disposition:
   * attachment - Chunked transfer encoding
   */
  retrieve(
    agentId: string,
    datasetName: string,
    query?: EvaluateRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  retrieve(agentId: string, datasetName: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieve(
    agentId: string,
    datasetName: string,
    query: EvaluateRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrieve(agentId, datasetName, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets/evaluate/${datasetName}`, {
      query,
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Append to an existing evaluation `Dataset`.
   *
   * Create a new version of the dataset by appending content to the `Dataset` and
   * validating against its schema.
   *
   * File schema for `dataset_type` `evaluation_set` is a JSONL file where each line
   * is one JSON object with the following keys:
   *
   * - `prompt` (required, `string`): Prompt or question
   *
   * - `response` (optional, `string`): Optional response to evaluate
   *
   * - `reference` (required, `string`): Required reference or ground truth response
   *
   * - `guideline` (optional, `string`): Optional evaluation guidelines
   *
   * - `knowledge` (optional, `string`): Optional retrieved context for evaluation,
   *   as a list of string text chunks
   */
  update(
    agentId: string,
    datasetName: string,
    body: EvaluateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.CreateDatasetResponse> {
    return this._client.put(
      `/agents/${agentId}/datasets/evaluate/${datasetName}`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * List all evaluation `Datasets` and their versions belonging to a particular
   * `Agent`.
   *
   * If a `dataset_name` filter is provided, all versions of that `Dataset` will be
   * listed.
   *
   * Includes metadata and schema for each `Dataset` version.
   */
  list(
    agentId: string,
    query?: EvaluateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.ListDatasetsResponse>;
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<DatasetsAPI.ListDatasetsResponse>;
  list(
    agentId: string,
    query: EvaluateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.ListDatasetsResponse> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets/evaluate`, { query, ...options });
  }

  /**
   * Delete an evaluation `Dataset` and all its versions.
   *
   * Permanently removes the `Dataset`, including all associated metadata.
   *
   * This operation is irreversible.
   */
  delete(agentId: string, datasetName: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/agents/${agentId}/datasets/evaluate/${datasetName}`, options);
  }

  /**
   * Retrieve details of a specific evaluation `Dataset` version, or the latest
   * version if no `version` is specified.
   *
   * Provides comprehensive information about the `Dataset`, including its metadata
   * and schema.
   */
  metadata(
    agentId: string,
    datasetName: string,
    query?: EvaluateMetadataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.DatasetMetadata>;
  metadata(
    agentId: string,
    datasetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.DatasetMetadata>;
  metadata(
    agentId: string,
    datasetName: string,
    query: EvaluateMetadataParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.DatasetMetadata> {
    if (isRequestOptions(query)) {
      return this.metadata(agentId, datasetName, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets/evaluate/${datasetName}/metadata`, {
      query,
      ...options,
    });
  }
}

export type EvaluateDeleteResponse = unknown;

export interface EvaluateCreateParams {
  /**
   * Name of the evaluation dataset
   */
  dataset_name: string;

  /**
   * Type of evaluation dataset which determines its schema and validation rules.
   */
  dataset_type: 'evaluation_set';

  /**
   * JSONL file containing the evaluation dataset
   */
  file: Core.Uploadable;
}

export interface EvaluateRetrieveParams {
  /**
   * Batch size for processing
   */
  batch_size?: number;

  /**
   * Version number of the evaluation dataset to retrieve. Defaults to the latest
   * version if not specified.
   */
  version?: string;
}

export interface EvaluateUpdateParams {
  /**
   * Type of evaluation dataset which determines its schema and validation rules.
   * Must match the `dataset_type` used at dataset creation time.
   */
  dataset_type: 'evaluation_set';

  /**
   * JSONL file containing the entries to append to the evaluation dataset
   */
  file: Core.Uploadable;
}

export interface EvaluateListParams {
  /**
   * Optional dataset name to filter the results by. If provided, only versions from
   * that dataset are listed.
   */
  dataset_name?: string;
}

export interface EvaluateMetadataParams {
  /**
   * Version number of the dataset. Defaults to the latest version if not specified.
   */
  version?: string;
}

export declare namespace Evaluate {
  export {
    type EvaluateDeleteResponse as EvaluateDeleteResponse,
    type EvaluateCreateParams as EvaluateCreateParams,
    type EvaluateRetrieveParams as EvaluateRetrieveParams,
    type EvaluateUpdateParams as EvaluateUpdateParams,
    type EvaluateListParams as EvaluateListParams,
    type EvaluateMetadataParams as EvaluateMetadataParams,
  };
}
