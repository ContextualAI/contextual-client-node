// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Generate extends APIResource {
  /**
   * Generate a response using Contextual's Grounded Language Model (GLM), an LLM
   * engineered specifically to prioritize faithfulness to in-context retrievals over
   * parametric knowledge to reduce hallucinations in Retrieval-Augmented Generation.
   *
   * The total request cannot exceed 6,100 tokens.
   */
  create(body: GenerateCreateParams, options?: Core.RequestOptions): Core.APIPromise<GenerateCreateResponse> {
    return this._client.post('/generate', { body, ...options });
  }
}

/**
 * /generate result object.
 */
export interface GenerateCreateResponse {
  /**
   * The model's response to the last user message.
   */
  response: string;
}

export interface GenerateCreateParams {
  /**
   * Extra parameters to be passed to Contextual's GLM
   */
  extra_body: GenerateCreateParams.ExtraBody;

  /**
   * List of messages in the conversation so far. The last message must be from the
   * user.
   */
  messages: Array<GenerateCreateParams.Message>;

  /**
   * The version of the Contextual's GLM to use. Currently, we just have "v1".
   */
  model: string;
}

export namespace GenerateCreateParams {
  /**
   * Extra parameters to be passed to Contextual's GLM
   */
  export interface ExtraBody {
    /**
     * The knowledge sources the model can use when generating a response.
     */
    knowledge: Array<string>;

    /**
     * Instructions that the model follows when generating responses. Note that we do
     * not guarantee that the model follows these instructions exactly.
     */
    system_prompt?: string;
  }

  /**
   * Message object for a message sent or received in a /query and /generate
   * conversation
   */
  export interface Message {
    /**
     * Content of the message
     */
    content: string;

    /**
     * Role of the sender
     */
    role: 'user' | 'system' | 'assistant';
  }
}

export declare namespace Generate {
  export {
    type GenerateCreateResponse as GenerateCreateResponse,
    type GenerateCreateParams as GenerateCreateParams,
  };
}
