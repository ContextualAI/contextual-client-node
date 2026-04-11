// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AgentsAPI from './agents';

export class Templates extends APIResource {
  /**
   * Get Template Configuration
   *
   * @example
   * ```ts
   * const agentMetadata =
   *   await client.agents.templates.retrieve('template');
   * ```
   */
  retrieve(template: string, options?: Core.RequestOptions): Core.APIPromise<AgentsAPI.AgentMetadata> {
    return this._client.get(`/agents/templates/${template}`, options);
  }

  /**
   * Retrieve a list of all available Templates.
   *
   * @example
   * ```ts
   * const templates = await client.agents.templates.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TemplateListResponse> {
    return this._client.get('/agents/templates', options);
  }
}

export interface TemplateListResponse {
  /**
   * List of available templates.
   */
  templates?: Array<string>;
}

export declare namespace Templates {
  export { type TemplateListResponse as TemplateListResponse };
}
