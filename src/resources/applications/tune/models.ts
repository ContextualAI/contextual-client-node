// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Models extends APIResource {
  /**
   * Retrieves a list of tuned models associated with the specified application.
   */
  list(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get(`/applications/${applicationId}/tune/models`, options);
  }
}

/**
 * Response model to list registered models
 */
export interface ModelListResponse {
  /**
   * Whether there are more models to retrieve
   */
  has_more: boolean;

  /**
   * List of registered models for the application
   */
  models: Array<ModelListResponse.Model>;

  /**
   * Total number of models associated with the application
   */
  total: number;

  /**
   * Identifier of the last model from the current request, used for pagination
   */
  next_after?: string;
}

export namespace ModelListResponse {
  /**
   * Response model to list individual registered model
   */
  export interface Model {
    /**
     * ID of the associated application
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
     * Type of specialization task that produced the model
     */
    task_type: 'tune' | 'align';
  }
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse };
}
