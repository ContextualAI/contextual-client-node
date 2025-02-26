// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Jobs extends APIResource {
  /**
   * Retrieve a list of all fine-tuning jobs for a specified Agent.
   */
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ListTuneJobsResponse> {
    return this._client.get(`/agents/${agentId}/tune/jobs`, options);
  }

  /**
   * Cancel a specific fine-tuning job. Terminates the fine-tuning job if it is still
   * in progress.
   */
  delete(agentId: string, jobId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/agents/${agentId}/tune/jobs/${jobId}`, options);
  }

  /**
   * Retrieve the status of a specific tuning job. Fetches the current status and
   * evaluation results, if available, for the specified tuning job. After the tuning
   * job is complete, the metadata associated with the tune job will include
   * evaluation results and a model ID. You can then activate the tuned model for
   * your agent by editing its config with the tuned model ID and the "Edit Agent"
   * API (i.e. the `PUT /agents/{agent_id}` API). To deactivate the tuned model, you
   * will need to edit the Agent's config again and set the `llm_model_id` field to
   * "default". For an end-to-end walkthrough, see the `Tune & Evaluation Guide`.
   */
  metadata(agentId: string, jobId: string, options?: Core.RequestOptions): Core.APIPromise<TuneJobMetadata> {
    return this._client.get(`/agents/${agentId}/tune/jobs/${jobId}/metadata`, options);
  }
}

/**
 * Response model to list tune jobs
 */
export interface ListTuneJobsResponse {
  /**
   * List of fine-tuning jobs for the agent
   */
  jobs: Array<TuneJobMetadata>;

  /**
   * Total number of jobs associated with the agent
   */
  total_count: number;
}

/**
 * Response to GET /applications/{application_id}/tune/jobs/{job_id}
 */
export interface TuneJobMetadata {
  /**
   * ID of the tune job
   */
  id: string;

  /**
   * Status of the tune job
   */
  job_status: string;

  /**
   * Metadata about the model evaluation, including status and results if completed.
   */
  evaluation_metadata?: unknown | null;

  /**
   * ID of the tuned model. Omitted if the tuning job failed or is still in progress.
   */
  model_id?: string;
}

export type JobDeleteResponse = unknown;

export declare namespace Jobs {
  export {
    type ListTuneJobsResponse as ListTuneJobsResponse,
    type TuneJobMetadata as TuneJobMetadata,
    type JobDeleteResponse as JobDeleteResponse,
  };
}
