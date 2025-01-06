// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as MetadataAPI from './metadata';
import { Metadata } from './metadata';

export class Jobs extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

  /**
   * Retrieve a list of `Evaluation` rounds run on a given `Application`, including
   * the `Evaluation`'s status and other metadata.
   */
  list(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<ListEvaluationResponse> {
    return this._client.get(`/applications/${applicationId}/evaluate/jobs`, options);
  }

  /**
   * Cancels an `Evaluation` round.
   */
  cancel(applicationId: string, jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(`/applications/${applicationId}/evaluate/jobs/${jobId}/cancel`, options);
  }
}

/**
 * Response from Get Evaluation Results request
 */
export interface EvaluationRoundResponse {
  /**
   * Dataset name containing the individual results of the evaluation round
   */
  dataset_name: string;

  /**
   * Metadata of the evaluation round with the number of predictions, failed
   * predictions, and successful predictions.
   */
  job_metadata: EvaluationRoundResponse.JobMetadata;

  /**
   * Results of the evaluation round, grouped by each metric
   */
  metrics: unknown;

  /**
   * Status of the evaluation round
   */
  status: 'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled';
}

export namespace EvaluationRoundResponse {
  /**
   * Metadata of the evaluation round with the number of predictions, failed
   * predictions, and successful predictions.
   */
  export interface JobMetadata {
    /**
     * Number of predictions that failed during the evaluation job
     */
    num_failed_predictions?: number;

    /**
     * Total number of predictions made during the evaluation job
     */
    num_predictions?: number;

    /**
     * Number of predictions that were successful during the evaluation job
     */
    num_successful_predictions?: number;
  }
}

/**
 * Response from List Evaluations request
 */
export interface ListEvaluationResponse {
  /**
   * List of evaluation results
   */
  evaluation_rounds: Array<ListEvaluationResponse.EvaluationRound>;
}

export namespace ListEvaluationResponse {
  /**
   * Metadata of an evaluation round
   */
  export interface EvaluationRound {
    /**
     * ID of the evaluation round
     */
    id: string;

    /**
     * Timestamp indicating when the evaluation round was created
     */
    created_at: string;

    /**
     * Status of the evaluation round
     */
    status: 'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled';

    /**
     * Email of the user who launched the evaluation round
     */
    user_email: string;
  }
}

export type JobCancelResponse = unknown;

Jobs.Metadata = Metadata;

export declare namespace Jobs {
  export {
    type EvaluationRoundResponse as EvaluationRoundResponse,
    type ListEvaluationResponse as ListEvaluationResponse,
    type JobCancelResponse as JobCancelResponse,
  };

  export { Metadata as Metadata };
}
