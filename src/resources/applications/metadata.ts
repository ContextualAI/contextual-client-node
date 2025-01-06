// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Metadata extends APIResource {
  /**
   * Get metadata and configuration of a given `Application`.
   */
  retrieve(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<GetApplicationResponse> {
    return this._client.get(`/applications/${applicationId}/metadata`, options);
  }
}

/**
 * Response to GET Application request
 */
export interface GetApplicationResponse {
  /**
   * The IDs of the datastore associated with the application
   */
  datastore_ids: Array<string>;

  /**
   * Name of the application
   */
  name: string;

  /**
   * Description of the application
   */
  description?: string;

  /**
   * Optional model ID of a tuned model to use for generation. Model must have been
   * tuned on this application; tuned models cannot be used across applications. Uses
   * default model if none is specified. Set to `default` to deactivate the tuned
   * model and use the default model.
   */
  llm_model_id?: string;

  /**
   * These queries will show up as suggestions when users load the app. We recommend
   * including common queries that users will ask, as well as complex queries so
   * users understand the types of complex queries the system can handle.
   */
  suggested_queries?: Array<string>;

  /**
   * Instructions that your RAG system references when generating responses. Note
   * that we do not guarantee that the system will follow these instructions exactly.
   */
  system_prompt?: string;
}

export declare namespace Metadata {
  export { type GetApplicationResponse as GetApplicationResponse };
}
