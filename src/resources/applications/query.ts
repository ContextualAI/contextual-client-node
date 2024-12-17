// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Query extends APIResource {
  /**
   * Provide feedback for a generation or a retrieval.
   *
   * If providing feedback on a retrieval, include the `message_id` of the /query
   * call, and a `content_id` returned in the query's retrieval_contents list.
   *
   * For feedback on generations, include `message_id` and do not include a
   * `content_id`.
   */
  feedback(
    applicationId: string,
    body: QueryFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/applications/${applicationId}/feedback`, { body, ...options });
  }

  /**
   * Start a conversation with an application and receive its generated response and
   * attributions.
   */
  start(
    applicationId: string,
    body: QueryStartParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryResponse> {
    return this._client.post(`/applications/${applicationId}/query`, { body, ...options });
  }
}

/**
 * Response body for POST /query
 */
export interface QueryResponse {
  /**
   * Attributions for the response
   */
  attributions: Array<QueryResponse.Attribution>;

  /**
   * A unique identifier for the conversation. Can be passed to future `/query` calls
   * to continue a conversation with the same message history.
   */
  conversation_id: string;

  /**
   * Response to the query request
   */
  message: QueryResponse.Message;

  /**
   * A unique identifier for this specific message
   */
  message_id: string;

  /**
   * Relevant content retrieved to answer the query
   */
  retrieval_contents: Array<QueryResponse.RetrievalContent>;
}

export namespace QueryResponse {
  /**
   * Attribution for some claim made in a generated message`.
   */
  export interface Attribution {
    /**
     * Content IDs of the sources for the attributed text
     */
    content_ids: Array<string>;

    /**
     * End index of the attributed text in the generated message
     */
    end_idx: number;

    /**
     * Start index of the attributed text in the generated message
     */
    start_idx: number;
  }

  /**
   * Response to the query request
   */
  export interface Message {
    /**
     * Content of the message
     */
    content: string;

    /**
     * Role of sender
     */
    role: 'user' | 'system' | 'assistant';
  }

  /**
   * Retrieval content object typing for v0.1 API.
   */
  export interface RetrievalContent {
    /**
     * Unique identifier of the retrieved content
     */
    content_id: string;

    /**
     * Unique identifier of the document
     */
    doc_id: string;

    /**
     * Name of the document
     */
    doc_name: string;

    /**
     * Format of the content, such as `pdf` or `html`
     */
    format: 'pdf' | 'html';

    /**
     * Index of the retrieved item in the retrieval_contents list (starting from 1)
     */
    number: number;

    /**
     * Source type of the content. Will be `file` for any docs ingested through
     * ingestion API.
     */
    type: string;

    /**
     * Reserved for extra metadata
     */
    extras?: Record<string, string>;

    /**
     * Page number of the content in the document
     */
    page?: number;

    /**
     * URL of the source content, if applicable
     */
    url?: string;
  }
}

export type QueryFeedbackResponse = unknown;

export interface QueryFeedbackParams {
  /**
   * Feedback to provide on the message. Set to "removed" to undo previously provided
   * feedback.
   */
  feedback: 'thumbs_up' | 'thumbs_down' | 'flagged' | 'removed';

  /**
   * ID of the message to provide feedback on.
   */
  message_id: string;

  /**
   * Content ID to provide feedback on, if feedback is on retrieval. Set to None for
   * generation feedback.
   */
  content_id?: string;

  /**
   * Optional explanation for the feedback.
   */
  explanation?: string;
}

export interface QueryStartParams {
  /**
   * Message objects in the conversation
   */
  messages: Array<QueryStartParams.Message>;

  /**
   * Conversation ID. An optional alternative to providing message history in the
   * `messages` field. If provided, history in the `messages` field will be ignored.
   */
  conversation_id?: string;

  /**
   * Model ID of the specific fine-tuned or aligned model to use. Defaults to base
   * model if not specified.
   */
  model_id?: string;

  /**
   * Set to `true` to receive a streamed response
   */
  stream?: boolean;
}

export namespace QueryStartParams {
  /**
   * Message object for a message sent or received in a /query conversation
   */
  export interface Message {
    /**
     * Content of the message
     */
    content: string;

    /**
     * Role of sender
     */
    role: 'user' | 'system' | 'assistant';
  }
}

export declare namespace Query {
  export {
    type QueryResponse as QueryResponse,
    type QueryFeedbackResponse as QueryFeedbackResponse,
    type QueryFeedbackParams as QueryFeedbackParams,
    type QueryStartParams as QueryStartParams,
  };
}