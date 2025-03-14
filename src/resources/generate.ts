// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Generate extends APIResource {
  /**
   * Generate a response using Contextual's Grounded Language Model (GLM), an LLM
   * engineered specifically to prioritize faithfulness to in-context retrievals over
   * parametric knowledge to reduce hallucinations in Retrieval-Augmented Generation
   * and agentic use cases.
   *
   * The total request cannot exceed 32,000 tokens. See more details and code
   * examples in our
   * [our blog post](https://contextual.ai/blog/introducing-grounded-language-model/).
   * Email [glm-feedback@contextual.ai](mailto:glm-feedback@contextual.ai) with any
   * feedback or questions.
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
   * The version of the Contextual's GLM to use. Currently, we just have
   * "ctxl-rerank-en-v1-instruct".
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
   * The maximum number of tokens that the model can generate in the response.
   */
  max_new_tokens?: number;

  /**
   * Instructions that the model follows when generating responses. Note that we do
   * not guarantee that the model follows these instructions exactly.
   */
  system_prompt?: string;

  /**
   * The sampling temperature, which affects the randomness in the response. Note
   * that higher temperature values can reduce groundedness.
   */
  temperature?: number;

  /**
   * A parameter for nucleus sampling, an alternative to temperature which also
   * affects the randomness of the response. Note that higher top_p values can reduce
   * groundedness.
   */
  top_p?: number;
}

export namespace GenerateCreateParams {
  /**
   * Message object for a message received in the /generate request
   */
  export interface Message {
    /**
     * Content of the message
     */
    content: string;

    /**
     * Role of the sender
     */
    role: 'user' | 'assistant';
  }
}

export declare namespace Generate {
  export {
    type GenerateCreateResponse as GenerateCreateResponse,
    type GenerateCreateParams as GenerateCreateParams,
  };
}
