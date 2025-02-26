// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Generate extends APIResource {
  /**
   * Generate a response using Contextual's Grounded Language Model (GLM), an LLM
   * engineered specifically to prioritize faithfulness to in-context retrievals over
   * parametric knowledge to reduce hallucinations in Retrieval-Augmented Generation.
   *
   * The total request cannot exceed 32,000 tokens. Email glm-feedback@contextual.ai
   * with any feedback or questions.
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
   * The knowledge sources the model can use when generating a response.
   */
  knowledge: Array<string>;

  /**
   * List of messages in the conversation so far. The last message must be from the
   * user.
   */
  messages: Array<GenerateCreateParams.Message>;

  /**
   * The version of the Contextual's GLM to use. Currently, we just have "v1".
   */
  model: string;

  /**
   * Flag to indicate whether the model should avoid providing additional commentary
   * in responses. Commentary is conversational in nature and does not contain
   * verifiable claims; therefore, commentary is not strictly grounded in available
   * context. However, commentary may provide useful context which improves the
   * helpfulness of responses.
   */
  avoid_commentary?: boolean;

  /**
   * Instructions that the model follows when generating responses. Note that we do
   * not guarantee that the model follows these instructions exactly.
   */
  system_prompt?: string;
}

export namespace GenerateCreateParams {
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
    role: 'user' | 'system' | 'assistant' | 'knowledge';
  }
}

export declare namespace Generate {
  export {
    type GenerateCreateResponse as GenerateCreateResponse,
    type GenerateCreateParams as GenerateCreateParams,
  };
}
