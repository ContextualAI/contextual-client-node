// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MetadataAPI from './metadata';
import { Metadata, MetadataRetrieveParams } from './metadata';

export class Datasets extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

  /**
   * Create a new `Dataset` for the specified `Agent` using the provided JSONL file.
   * A `Dataset` is a versioned collection of samples conforming to a particular
   * schema, and can be used to store `Evaluation` test-sets and retrieve
   * `Evaluation` results.
   *
   * Each `Dataset` is versioned and validated against its schema during creation and
   * subsequent updates. The provided `Dataset` file must conform to the schema
   * defined for the `dataset_type`.
   *
   * File schema for `dataset_type` `evaluation_set` is a JSONL or CSV file where
   * each line is one JSON object with the following keys:
   *
   * - `response` (optional, `string`): Optional response to evaluate
   *
   * - `reference` (required, `string`): Required reference or ground truth response
   *
   * - `guideline` (optional, `string`): Optional evaluation guidelines
   *
   * - `knowledge` (optional, `string`): Optional context for evaluation
   */
  create(
    agentId: string,
    body: DatasetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateDatasetResponse> {
    return this._client.post(
      `/agents/${agentId}/datasets`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Stream the raw content of a `Dataset` version. If no version is specified, the
   * latest version is used.
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
    query?: DatasetRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  retrieve(agentId: string, datasetName: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  retrieve(
    agentId: string,
    datasetName: string,
    query: DatasetRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.retrieve(agentId, datasetName, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets/${datasetName}`, { query, ...options });
  }

  /**
   * Append to an existing `Dataset`.
   *
   * Create a new version by appending content to the `Dataset` and validating
   * against its schema.
   *
   * File schema for `dataset_type` `evaluation_set` is a JSONL file where each line
   * is one JSON object with the following keys:
   *
   * - `response` (optional, `string`): Optional response to evaluate
   *
   * - `reference` (required, `string`): Required reference or ground truth response
   *
   * - `guideline` (optional, `string`): Optional evaluation guidelines
   *
   * - `knowledge` (optional, `string`): Optional context for evaluation
   */
  update(
    agentId: string,
    datasetName: string,
    body: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateDatasetResponse> {
    return this._client.put(
      `/agents/${agentId}/datasets/${datasetName}`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * List all `Datasets` and their versions belonging to a particular `Agent`.
   *
   * If a `dataset_name` filter is provided, all versions of that `Dataset` will be
   * listed.
   *
   * Includes metadata and schema for each `Dataset` version.
   */
  list(
    agentId: string,
    query?: DatasetListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsResponse>;
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<DatasetsResponse>;
  list(
    agentId: string,
    query: DatasetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsResponse> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets`, { query, ...options });
  }

  /**
   * Delete a `Dataset` and all its versions.
   *
   * Permanently removes the `Dataset`, including all associated metadata.
   *
   * This operation is irreversible.
   */
  delete(agentId: string, datasetName: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/agents/${agentId}/datasets/${datasetName}`, options);
  }
}

/**
 * Response to POST /datasets request
 */
export interface CreateDatasetResponse {
  /**
   * Name of the dataset
   */
  name: string;

  /**
   * Type of the dataset
   */
  type:
    | 'response_generation_train'
    | 'grounded_generation_train'
    | 'response_generation_validation'
    | 'grounded_generation_validation'
    | 'evaluation_run'
    | 'evaluation_set'
    | 'evaluation_set_prediction'
    | 'evaluation_run_result';

  /**
   * Version number of the dataset
   */
  version: string;
}

/**
 * Response to GET /datasets list endpoint
 */
export interface DatasetsResponse {
  dataset_summaries: Array<DatasetsResponse.DatasetSummary>;

  /**
   * Total number of datasets
   */
  total_count: number;
}

export namespace DatasetsResponse {
  /**
   * Summary information for a dataset
   */
  export interface DatasetSummary {
    /**
     * Timestamp indicating when the dataset was created
     */
    created_at: string;

    /**
     * Name of the dataset
     */
    name: string;

    /**
     * Number of samples in the dataset
     */
    num_samples: number;

    /**
     * Schema of the dataset
     */
    schema: unknown;

    /**
     * Validation status of the dataset
     */
    status: 'validated' | 'validating' | 'failed';

    /**
     * Type of the dataset
     */
    type:
      | 'response_generation_train'
      | 'grounded_generation_train'
      | 'response_generation_validation'
      | 'grounded_generation_validation'
      | 'evaluation_run'
      | 'evaluation_set'
      | 'evaluation_set_prediction'
      | 'evaluation_run_result';

    /**
     * Version of the dataset
     */
    version: string;
  }
}

/**
 * Response to GET /datasets/{name}
 */
export interface GetDatasetResponse {
  /**
   * Timestamp indicating when the dataset was created
   */
  created_at: string;

  /**
   * Number of samples in the dataset
   */
  num_samples: number;

  /**
   * Schema of the dataset
   */
  schema: unknown;

  /**
   * Validation status of the dataset
   */
  status: 'validated' | 'validating' | 'failed';

  /**
   * Type of the dataset
   */
  type:
    | 'response_generation_train'
    | 'grounded_generation_train'
    | 'response_generation_validation'
    | 'grounded_generation_validation'
    | 'evaluation_run'
    | 'evaluation_set'
    | 'evaluation_set_prediction'
    | 'evaluation_run_result';

  /**
   * Version of the dataset
   */
  version: string;
}

export type DatasetRetrieveResponse = unknown;

export type DatasetDeleteResponse = unknown;

export interface DatasetCreateParams {
  /**
   * Name of the dataset
   */
  dataset_name: string;

  /**
   * Type of dataset which determines its schema and validation rules.
   */
  dataset_type: 'evaluation_set';

  /**
   * JSONL file containing the dataset
   */
  file: Core.Uploadable;
}

export interface DatasetRetrieveParams {
  /**
   * Batch size for processing
   */
  batch_size?: number;

  /**
   * Version number of the dataset to retrieve. Defaults to the latest version if not
   * specified.
   */
  version?: string;
}

export interface DatasetUpdateParams {
  /**
   * Type of dataset which determines its schema and validation rules. Must match the
   * `dataset_type` used at dataset creation time.
   */
  dataset_type: 'evaluation_set';

  /**
   * JSONL file containing the dataset
   */
  file: Core.Uploadable;
}

export interface DatasetListParams {
  /**
   * Optional dataset name to filter the results by. If provided, only versions from
   * that dataset are listed.
   */
  dataset_name?: string;
}

Datasets.Metadata = Metadata;

export declare namespace Datasets {
  export {
    type CreateDatasetResponse as CreateDatasetResponse,
    type DatasetsResponse as DatasetsResponse,
    type GetDatasetResponse as GetDatasetResponse,
    type DatasetRetrieveResponse as DatasetRetrieveResponse,
    type DatasetDeleteResponse as DatasetDeleteResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetRetrieveParams as DatasetRetrieveParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
  };

  export { Metadata as Metadata, type MetadataRetrieveParams as MetadataRetrieveParams };
}
