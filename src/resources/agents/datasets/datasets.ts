// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EvaluateAPI from './evaluate';
import {
  Evaluate,
  EvaluateCreateParams,
  EvaluateDeleteResponse,
  EvaluateListParams,
  EvaluateMetadataParams,
  EvaluateRetrieveParams,
  EvaluateUpdateParams,
} from './evaluate';

export class Datasets extends APIResource {
  evaluate: EvaluateAPI.Evaluate = new EvaluateAPI.Evaluate(this._client);
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
  type: 'tuning_set' | 'evaluation_set' | 'evaluation_set_prediction' | 'evaluation_run_result';

  /**
   * Version number of the dataset
   */
  version: string;
}

/**
 * Response to GET /datasets/{name}
 */
export interface DatasetMetadata {
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
  type: 'tuning_set' | 'evaluation_set' | 'evaluation_set_prediction' | 'evaluation_run_result';

  /**
   * Version of the dataset
   */
  version: string;
}

/**
 * Response to GET /datasets list endpoint
 */
export interface ListDatasetsResponse {
  dataset_summaries: Array<ListDatasetsResponse.DatasetSummary>;

  /**
   * Total number of datasets
   */
  total_count: number;
}

export namespace ListDatasetsResponse {
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
    type: 'tuning_set' | 'evaluation_set' | 'evaluation_set_prediction' | 'evaluation_run_result';

    /**
     * Version of the dataset
     */
    version: string;
  }
}

Datasets.Evaluate = Evaluate;

export declare namespace Datasets {
  export {
    type CreateDatasetResponse as CreateDatasetResponse,
    type DatasetMetadata as DatasetMetadata,
    type ListDatasetsResponse as ListDatasetsResponse,
  };

  export {
    Evaluate as Evaluate,
    type EvaluateDeleteResponse as EvaluateDeleteResponse,
    type EvaluateCreateParams as EvaluateCreateParams,
    type EvaluateRetrieveParams as EvaluateRetrieveParams,
    type EvaluateUpdateParams as EvaluateUpdateParams,
    type EvaluateListParams as EvaluateListParams,
    type EvaluateMetadataParams as EvaluateMetadataParams,
  };
}
