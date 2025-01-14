// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as MetadataAPI from './metadata';
import { Metadata } from './metadata';

export class Jobs extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

  /**
   * Retrieve a list of all tune jobs run on a specified `Agent`, including their
   * `status`, `evaluation_results`, and resultant `model_id`.
   */
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ListTuneJobsResponse> {
    return this._client.get(`/agents/${agentId}/tune/jobs`, options);
  }

  /**
   * Cancel a specific tuning job. Terminates the tuning job if it is still in
   * progress. If the tuning job has already completed, the tuned model will not be
   * deleted.
   */
  delete(agentId: string, jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/agents/${agentId}/tune/jobs/${jobId}`, options);
  }
}

export interface ListTuneJobsResponse {
  /**
   * List of tune jobs
   */
  jobs: Array<ListTuneJobsResponse.Job>;

  /**
   * Next cursor to continue pagination. Omitted if there are no more specialization
   * jobs.
   */
  next_cursor?: string;

  /**
   * Total number of available specialization jobs
   */
  total_count?: number;
}

export namespace ListTuneJobsResponse {
  /**
   * Response to GET /agents/{agent_id}/tune/jobs/{job_id}
   */
  export interface Job {
    /**
     * ID of the tune job
     */
    id: string;

    /**
     * Status of the tune job
     */
    job_status: string;

    /**
     * Evaluation results of the tuned model, represented as an object mapping metric
     * names (strings) to their scores (floats). Omitted if the tuning job failed or is
     * still in progress.
     */
    evaluation_results?: Record<string, number>;

    /**
     * ID of the trained model. Omitted if the tuning job failed or is still in
     * progress.
     */
    model_id?: string;
  }
}

/**
 * Response to GET /agents/{agent_id}/tune/jobs/{job_id}
 */
export interface TuneJobResponse {
  /**
   * Status of the tune job
   */
  job_status: string;

  /**
   * Evaluation results of the tuned model, represented as an object mapping metric
   * names (strings) to their scores (floats). Omitted if the tuning job failed or is
   * still in progress.
   */
  evaluation_results?: Record<string, number>;

  /**
   * ID of the trained model. Omitted if the tuning job failed or is still in
   * progress.
   */
  model_id?: string;
}

export type JobDeleteResponse = unknown;

Jobs.Metadata = Metadata;

export declare namespace Jobs {
  export {
    type ListTuneJobsResponse as ListTuneJobsResponse,
    type TuneJobResponse as TuneJobResponse,
    type JobDeleteResponse as JobDeleteResponse,
  };

  export { Metadata as Metadata };
}
