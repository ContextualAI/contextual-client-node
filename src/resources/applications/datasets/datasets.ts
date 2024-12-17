// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MetadataAPI from './metadata';
import { Metadata, MetadataRetrieveParams } from './metadata';

export class Datasets extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

  /**
   * Create a new dataset in the specified application using the provided JSONL file.
   * The file must conform to the schema defined for the dataset type. Each dataset
   * is versioned and validated against its schema during creation.
   *
   * File schema for dataset type `evaluation_set` is a JSONL file where each line is
   * one JSON object with the following keys:
   *
   * - `response` (optional, string): Optional response to evaluate
   *
   * - `reference` (required, string): Required reference or ground truth response
   *
   * - `guideline` (optional, string): Optional evaluation guidelines
   *
   * - `knowledge` (optional, string): Optional context for evaluation
   */
  create(
    applicationId: string,
    body: DatasetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateDatasetResponse> {
    return this._client.post(
      `/applications/${applicationId}/datasets`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Stream the raw content of a dataset version. If no version is specified, the
   * latest version is used. The dataset content is downloaded in batches. Batch size
   * can be configured to meet specific processing requirements.
   */
  retrieve(
    applicationId: string,
    datasetName: string,
    query?: DatasetRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  retrieve(
    applicationId: string,
    datasetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  retrieve(
    applicationId: string,
    datasetName: string,
    query: DatasetRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.retrieve(applicationId, datasetName, {}, query);
    }
    return this._client.get(`/applications/${applicationId}/datasets/${datasetName}`, { query, ...options });
  }

  /**
   * Update an existing dataset.
   *
   * Create a new version by appending dataset content and validating against the
   * schema.
   *
   * File schema for dataset type `evaluation_set` is a JSONL file where each line is
   * one JSON object with the following keys:
   *
   * - `response` (optional, string): Optional response to evaluate
   *
   * - `reference` (required, string): Required reference or ground truth response
   *
   * - `guideline` (optional, string): Optional evaluation guidelines
   *
   * - `knowledge` (optional, string): Optional context for evaluation
   */
  update(
    applicationId: string,
    datasetName: string,
    body: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateDatasetResponse> {
    return this._client.put(
      `/applications/${applicationId}/datasets/${datasetName}`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * List all datasets and their versions for an application. Retrieve a
   * comprehensive list of datasets and their versions. Supports filtering by dataset
   * name and includes detailed schema information for each dataset type.
   */
  list(
    applicationId: string,
    query?: DatasetListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDatasetResponse>;
  list(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<ListDatasetResponse>;
  list(
    applicationId: string,
    query: DatasetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDatasetResponse> {
    if (isRequestOptions(query)) {
      return this.list(applicationId, {}, query);
    }
    return this._client.get(`/applications/${applicationId}/datasets`, { query, ...options });
  }

  /**
   * Delete a dataset and all its versions. Permanently removes the dataset,
   * including all associated data and evaluation runs. This operation is
   * irreversible.
   */
  delete(
    applicationId: string,
    datasetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(`/applications/${applicationId}/datasets/${datasetName}`, options);
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

/**
 * Response to GET /datasets list endpoint
 */
export interface ListDatasetResponse {
  dataset_summaries: Array<ListDatasetResponse.DatasetSummary>;

  /**
   * Total number of datasets
   */
  total_count: number;
}

export namespace ListDatasetResponse {
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
    type GetDatasetResponse as GetDatasetResponse,
    type ListDatasetResponse as ListDatasetResponse,
    type DatasetRetrieveResponse as DatasetRetrieveResponse,
    type DatasetDeleteResponse as DatasetDeleteResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetRetrieveParams as DatasetRetrieveParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
  };

  export { Metadata as Metadata, type MetadataRetrieveParams as MetadataRetrieveParams };
}