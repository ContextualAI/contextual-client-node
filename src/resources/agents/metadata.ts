// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Metadata extends APIResource {
  /**
   * Get metadata and configuration of a given `Agent`.
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<GetAgentResponse> {
    return this._client.get(`/agents/${agentId}/metadata`, options);
  }
}

/**
 * Response to GET Agent request
 */
export interface GetAgentResponse {
  /**
   * The IDs of the datastore(s) associated with the agent
   */
  datastore_ids: Array<string>;

  /**
   * Name of the agent
   */
  name: string;

  /**
   * Description of the agent
   */
  description?: string;

  /**
   * Optional model ID of a tuned model to use for generation. Model must have been
   * tuned on this agent; tuned models cannot be used across agents. Uses default
   * model if none is specified. Set to `default` to deactivate the tuned model and
   * use the default model.
   */
  llm_model_id?: string;

  /**
   * These queries will show up as suggestions in the Contextual UI when users load
   * the agent. We recommend including common queries that users will ask, as well as
   * complex queries so users understand the types of complex queries the system can
   * handle.
   */
  suggested_queries?: Array<string>;

  /**
   * Instructions that your agent references when generating responses. Note that we
   * do not guarantee that the system will follow these instructions exactly.
   */
  system_prompt?: string;
}

export declare namespace Metadata {
  export { type GetAgentResponse as GetAgentResponse };
}
