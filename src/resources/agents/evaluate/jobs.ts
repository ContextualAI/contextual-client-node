// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Jobs extends APIResource {
  /**
   * Retrieve a list of `Evaluation` rounds run on a given `Agent`, including the
   * `Evaluation`'s status and other metadata.
   */
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ListEvaluationJobsResponse> {
    return this._client.get(`/agents/${agentId}/evaluate/jobs`, options);
  }

  /**
   * Cancels an `Evaluation` round.
   */
  cancel(agentId: string, jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(`/agents/${agentId}/evaluate/jobs/${jobId}/cancel`, options);
  }

  /**
   * Get an `Evaluation` round's status and results.
   */
  metadata(
    agentId: string,
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationJobMetadata> {
    return this._client.get(`/agents/${agentId}/evaluate/jobs/${jobId}/metadata`, options);
  }
}

/**
 * Response from Get Evaluation Results request
 */
export interface EvaluationJobMetadata {
  /**
   * Dataset name containing the individual results of the evaluation round
   */
  dataset_name: string;

  /**
   * Metadata of the evaluation round with the number of predictions, failed
   * predictions, and successful predictions.
   */
  job_metadata: EvaluationJobMetadata.JobMetadata;

  /**
   * Results of the evaluation round, grouped by each metric
   */
  metrics: unknown;

  /**
   * Status of the evaluation round
   */
  status: 'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled';
}

export namespace EvaluationJobMetadata {
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
export interface ListEvaluationJobsResponse {
  /**
   * List of evaluation results
   */
  evaluation_rounds: Array<ListEvaluationJobsResponse.EvaluationRound>;
}

export namespace ListEvaluationJobsResponse {
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

export declare namespace Jobs {
  export {
    type EvaluationJobMetadata as EvaluationJobMetadata,
    type ListEvaluationJobsResponse as ListEvaluationJobsResponse,
    type JobCancelResponse as JobCancelResponse,
  };
}
