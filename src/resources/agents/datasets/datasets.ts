// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EvaluationAPI from './evaluation';
import {
  Evaluation,
  EvaluationCreateParams,
  EvaluationDeleteResponse,
  EvaluationListParams,
  EvaluationMetadataParams,
  EvaluationRetrieveParams,
  EvaluationUpdateParams,
} from './evaluation';
import * as TuneAPI from './tune';
import {
  Tune,
  TuneCreateParams,
  TuneDeleteResponse,
  TuneListParams,
  TuneMetadataParams,
  TuneRetrieveParams,
  TuneUpdateParams,
} from './tune';

export class Datasets extends APIResource {
  tune: TuneAPI.Tune = new TuneAPI.Tune(this._client);
  evaluation: EvaluationAPI.Evaluation = new EvaluationAPI.Evaluation(this._client);
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

Datasets.Tune = Tune;
Datasets.Evaluation = Evaluation;

export declare namespace Datasets {
  export {
    type CreateDatasetResponse as CreateDatasetResponse,
    type DatasetMetadata as DatasetMetadata,
    type ListDatasetsResponse as ListDatasetsResponse,
  };

  export {
    Tune as Tune,
    type TuneDeleteResponse as TuneDeleteResponse,
    type TuneCreateParams as TuneCreateParams,
    type TuneRetrieveParams as TuneRetrieveParams,
    type TuneUpdateParams as TuneUpdateParams,
    type TuneListParams as TuneListParams,
    type TuneMetadataParams as TuneMetadataParams,
  };

  export {
    Evaluation as Evaluation,
    type EvaluationDeleteResponse as EvaluationDeleteResponse,
    type EvaluationCreateParams as EvaluationCreateParams,
    type EvaluationRetrieveParams as EvaluationRetrieveParams,
    type EvaluationUpdateParams as EvaluationUpdateParams,
    type EvaluationListParams as EvaluationListParams,
    type EvaluationMetadataParams as EvaluationMetadataParams,
  };
}
