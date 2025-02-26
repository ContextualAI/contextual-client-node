// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Models extends APIResource {
  /**
   * Retrieves a list of tuned models associated with the specified Agent.
   */
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ListTuneModelsResponse> {
    return this._client.get(`/agents/${agentId}/tune/models`, options);
  }
}

/**
 * Response model to list registered models
 */
export interface ListTuneModelsResponse {
  /**
   * List of registered models for the agent
   */
  models: Array<ListTuneModelsResponse.Model>;

  /**
   * Total number of models associated with the agent
   */
  total_count: number;
}

export namespace ListTuneModelsResponse {
  /**
   * Response model to list individual registered model
   */
  export interface Model {
    /**
     * ID of the associated agent
     */
    application_id: string;

    /**
     * Timestamp indicating when the model was created
     */
    created_at: string;

    /**
     * ID of the tuning job that produced the model
     */
    job_id: string;

    /**
     * ID of the registered model
     */
    model_id: string;

    /**
     * State of the model
     */
    state: 'active' | 'inactive' | 'pending';
  }
}

export declare namespace Models {
  export { type ListTuneModelsResponse as ListTuneModelsResponse };
}
