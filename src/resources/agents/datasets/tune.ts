// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DatasetsAPI from './datasets';
import { type Response } from '../../../_shims/index';

export class Tune extends APIResource {
  /**
   * Create a new tuning `Dataset` for the specified `Agent` using the provided JSONL
   * or CSV file. A `Dataset` is a versioned collection of samples conforming to a
   * particular schema, and can be used as a source of training and test data for
   * tuning jobs.
   *
   * Each `Dataset` is versioned and validated against its schema during creation and
   * subsequent updates. The provided `Dataset` file must conform to the schema
   * defined for the `dataset_type`.
   *
   * File schema for `dataset_type` `tuning_set` is a CSV file or a JSONL file where
   * each line is one JSON object. The following keys are required:
   *
   * - `knowledge` (`list[str]`): Retrieved knowledge used to generate the reference
   *   answer. `knowledge` is a list of retrieved text chunks.
   *
   * - `reference` (`str`): The gold-standard answer to the prompt.
   *
   * - `guideline` (`str`): Guidelines for model output. If you do not have special
   *   guidelines for the model's output, you can use the `System Prompt` defined in
   *   your Agent configuration as the `guideline`.
   *
   * - `prompt` (`str`): Question for the model to respond to.
   *
   * For examples of what `tuning_set` should look like, check out our
   * `Tune & Evaluation Guide`.
   */
  create(
    agentId: string,
    body: TuneCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.CreateDatasetResponse> {
    return this._client.post(
      `/agents/${agentId}/datasets/tune`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Stream the raw content of a tuning `Dataset` version. If no version is
   * specified, the latest version is used.
   *
   * The `Dataset` content is downloaded in batches. Batch size can be configured to
   * meet specific processing requirements.
   *
   * Returns a `StreamingResponse`, an asynchronous stream of `Dataset` content with:
   *
   * - Content-Type: application/octet-stream
   *
   * - Content-Disposition: attachment
   *
   * - Chunked transfer encoding
   */
  retrieve(
    agentId: string,
    datasetName: string,
    query?: TuneRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  retrieve(agentId: string, datasetName: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieve(
    agentId: string,
    datasetName: string,
    query: TuneRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrieve(agentId, datasetName, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets/tune/${datasetName}`, {
      query,
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Append to an existing tuning `Dataset`.
   *
   * Create a new version of the dataset by appending content to the `Dataset` and
   * validating against its schema.
   *
   * File schema for `dataset_type` `evaluation_set` is a CSV file or a JSONL file
   * where each line is one JSON object. The following keys are required:
   *
   * - `knowledge` (`list[str]`): Retrieved knowledge used to generate the reference
   *   answer. `knowledge` is a list of retrieved text chunks.
   *
   * - `reference` (`str`): The gold-standard answer to the prompt.
   *
   * - `guideline` (`str`): Guidelines for model output. If you do not have special
   *   guidelines for the model's output, you can use the `System Prompt` defined in
   *   your Agent configuration as the `guideline`.
   *
   * - `prompt` (`str`): Question for the model to respond to.
   *
   * For examples of what `tuning_set` should look like, check out our
   * `Tune & Evaluation Guide`.
   */
  update(
    agentId: string,
    datasetName: string,
    body: TuneUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.CreateDatasetResponse> {
    return this._client.put(
      `/agents/${agentId}/datasets/tune/${datasetName}`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * List all tuning `Datasets` and their versions belonging to a particular `Agent`.
   *
   * If a `dataset_name` filter is provided, all versions of that `Dataset` will be
   * listed.
   *
   * Includes metadata and schema for each `Dataset` version.
   */
  list(
    agentId: string,
    query?: TuneListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.ListDatasetsResponse>;
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<DatasetsAPI.ListDatasetsResponse>;
  list(
    agentId: string,
    query: TuneListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.ListDatasetsResponse> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets/tune`, { query, ...options });
  }

  /**
   * Delete a tuning `Dataset` and all its versions.
   *
   * Permanently removes the `Dataset`, including all associated metadata.
   *
   * This operation is irreversible.
   */
  delete(agentId: string, datasetName: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/agents/${agentId}/datasets/tune/${datasetName}`, options);
  }

  /**
   * Retrieve details of a specific tuning `Dataset` version, or the latest version
   * if no `version` is specified.
   *
   * Provides comprehensive information about the `Dataset`, including its metadata
   * and schema.
   */
  metadata(
    agentId: string,
    datasetName: string,
    query?: TuneMetadataParams,
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
    query: TuneMetadataParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.DatasetMetadata> {
    if (isRequestOptions(query)) {
      return this.metadata(agentId, datasetName, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets/tune/${datasetName}/metadata`, {
      query,
      ...options,
    });
  }
}

export type TuneDeleteResponse = unknown;

export interface TuneCreateParams {
  /**
   * Name of the tune dataset
   */
  dataset_name: string;

  /**
   * Type of tune dataset which determines its schema and validation rules.
   */
  dataset_type: 'tuning_set';

  /**
   * JSONL or CSV file containing the tune dataset
   */
  file: Core.Uploadable;
}

export interface TuneRetrieveParams {
  /**
   * Batch size for processing
   */
  batch_size?: number;

  /**
   * Version number of the tune dataset to retrieve. Defaults to the latest version
   * if not specified.
   */
  version?: string;
}

export interface TuneUpdateParams {
  /**
   * Type of tune dataset which determines its schema and validation rules. Must
   * match the `dataset_type` used at dataset creation time.
   */
  dataset_type: 'tuning_set';

  /**
   * JSONL or CSV file containing the entries to append to the tune dataset
   */
  file: Core.Uploadable;
}

export interface TuneListParams {
  /**
   * Optional dataset name to filter the results by. If provided, only versions from
   * that dataset are listed.
   */
  dataset_name?: string;
}

export interface TuneMetadataParams {
  /**
   * Version number of the dataset. Defaults to the latest version if not specified.
   */
  version?: string;
}

export declare namespace Tune {
  export {
    type TuneDeleteResponse as TuneDeleteResponse,
    type TuneCreateParams as TuneCreateParams,
    type TuneRetrieveParams as TuneRetrieveParams,
    type TuneUpdateParams as TuneUpdateParams,
    type TuneListParams as TuneListParams,
    type TuneMetadataParams as TuneMetadataParams,
  };
}
