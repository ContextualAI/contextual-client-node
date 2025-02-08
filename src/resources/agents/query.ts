// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Query extends APIResource {
  /**
   * Start a conversation with an `Agent` and receive its generated response, along
   * with relevant retrieved data and attributions.
   */
  create(
    agentId: string,
    params: QueryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryResponse> {
    const { include_retrieval_content_text, retrievals_only, ...body } = params;
    return this._client.post(`/agents/${agentId}/query`, {
      query: { include_retrieval_content_text, retrievals_only },
      body,
      ...options,
    });
  }

  /**
   * Provide feedback for a generation or a retrieval. Feedback can be used to track
   * overall `Agent` performance through the `Feedback` page in the Contextual UI,
   * and as a basis for model fine-tuning.
   *
   * If providing feedback on a retrieval, include the `message_id` from the `/query`
   * response, and a `content_id` returned in the query's `retrieval_contents` list.
   *
   * For feedback on generations, include `message_id` and do not include a
   * `content_id`.
   */
  feedback(
    agentId: string,
    body: QueryFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(`/agents/${agentId}/feedback`, { body, ...options });
  }

  /**
   * Returns usage and user-provided feedback data. This information can be used for
   * data-driven improvements and optimization.
   */
  metrics(
    agentId: string,
    query?: QueryMetricsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryMetricsResponse>;
  metrics(agentId: string, options?: Core.RequestOptions): Core.APIPromise<QueryMetricsResponse>;
  metrics(
    agentId: string,
    query: QueryMetricsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueryMetricsResponse> {
    if (isRequestOptions(query)) {
      return this.metrics(agentId, {}, query);
    }
    return this._client.get(`/agents/${agentId}/metrics`, { query, ...options });
  }

  /**
   * Return metadata of the contents used to generate the response for a given
   * message.
   */
  retrievalInfo(
    agentId: string,
    messageId: string,
    query: QueryRetrievalInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RetrievalInfoResponse> {
    return this._client.get(`/agents/${agentId}/query/${messageId}/retrieval/info`, { query, ...options });
  }
}

/**
 * Response body for POST /query
 */
export interface QueryResponse {
  /**
   * A unique identifier for the conversation. Can be passed to future `/query` calls
   * to continue a conversation with the same message history.
   */
  conversation_id: string;

  /**
   * Relevant content retrieved to answer the query
   */
  retrieval_contents: Array<QueryResponse.RetrievalContent>;

  /**
   * Attributions for the response
   */
  attributions?: Array<QueryResponse.Attribution>;

  /**
   * Response to the query request
   */
  message?: QueryResponse.Message;

  /**
   * A unique identifier for this specific message
   */
  message_id?: string;
}

export namespace QueryResponse {
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
     * Source type of the content. Will be `file` for any docs ingested through
     * ingestion API.
     */
    type: string;

    /**
     * Text of the retrieved content. Included in response to a query if
     * `include_retrieval_content_text` is True
     */
    content_text?: string;

    /**
     * Index of the retrieved item in the retrieval_contents list (starting from 1)
     */
    number?: number;

    /**
     * Page number of the content in the document
     */
    page?: number;

    /**
     * URL of the source content, if applicable
     */
    url?: string;
  }

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
     * Role of the sender
     */
    role: 'user' | 'system' | 'assistant';
  }
}

export interface RetrievalInfoResponse {
  /**
   * List of content metadatas.
   */
  content_metadatas?: Array<RetrievalInfoResponse.ContentMetadata>;
}

export namespace RetrievalInfoResponse {
  export interface ContentMetadata {
    /**
     * Id of the content.
     */
    content_id: string;

    /**
     * Text of the content.
     */
    content_text: string;

    /**
     * Height of the image.
     */
    height: number;

    /**
     * Image of the page on which the content occurs.
     */
    page_img: string;

    /**
     * Width of the image.
     */
    width: number;

    /**
     * X coordinate of the top left corner on the bounding box.
     */
    x0: number;

    /**
     * X coordinate of the bottom right corner on the bounding box.
     */
    x1: number;

    /**
     * Y coordinate of the top left corner on the bounding box.
     */
    y0: number;

    /**
     * Y coordinate of the bottom right corner on the bounding box.
     */
    y1: number;
  }
}

export type QueryFeedbackResponse = unknown;

export interface QueryMetricsResponse {
  /**
   * Total number of messages.
   */
  total_count: number;

  /**
   * List of messages.
   */
  messages?: Array<unknown>;

  /**
   * Offset for the next page. If there are no more messages to get, then this is not
   * set.
   */
  next_offset?: number;
}

export interface QueryCreateParams {
  /**
   * Body param: Messages sent so far in the conversation, ending in the latest user
   * message. Add multiple objects to provide conversation history. Last message in
   * the list must be a `user`-sent message (i.e. `role` equals `"user"`).
   */
  messages: Array<QueryCreateParams.Message>;

  /**
   * Query param: Ignored if `retrievals_only` is True. Set to `true` to include the
   * text of the retrieved contents in the response. If `false`, only metadata about
   * the retrieved contents will be included, not content text. Content text and
   * other metadata can also be fetched separately using the
   * `/agents/{agent_id}/query/{message_id}/retrieval/info` endpoint.
   */
  include_retrieval_content_text?: boolean;

  /**
   * Query param: Set to `true` to fetch retrieval content and metadata, and then
   * skip generation of the response.
   */
  retrievals_only?: boolean;

  /**
   * Body param: An optional alternative to providing message history in the
   * `messages` field. If provided, all messages in the `messages` list prior to the
   * latest user-sent query will be ignored.
   */
  conversation_id?: string;

  /**
   * Body param: Model ID of the specific fine-tuned or aligned LLM model to use.
   * Defaults to base model if not specified.
   */
  llm_model_id?: string;

  /**
   * Body param: Set to `true` to receive a streamed response
   */
  stream?: boolean;
}

export namespace QueryCreateParams {
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

export interface QueryFeedbackParams {
  /**
   * Feedback to provide on the message. Set to "removed" to undo previously provided
   * feedback.
   */
  feedback: 'thumbs_up' | 'thumbs_down' | 'flagged' | 'removed';

  /**
   * ID of the message on which to provide feedback.
   */
  message_id: string;

  /**
   * ID of the content on which to provide feedback, if feedback is on retrieval. Do
   * not set (or set to null) while providing generation feedback.
   */
  content_id?: string;

  /**
   * Optional explanation for the feedback.
   */
  explanation?: string;
}

export interface QueryMetricsParams {
  /**
   * Filters messages that are created after the specified timestamp.
   */
  created_after?: string;

  /**
   * Filters messages that are created before specified timestamp.
   */
  created_before?: string;

  /**
   * Limits the number of messages to return.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: number;
}

export interface QueryRetrievalInfoParams {
  /**
   * List of content ids for which to get the metadata.
   */
  content_ids: Array<string>;
}

export declare namespace Query {
  export {
    type QueryResponse as QueryResponse,
    type RetrievalInfoResponse as RetrievalInfoResponse,
    type QueryFeedbackResponse as QueryFeedbackResponse,
    type QueryMetricsResponse as QueryMetricsResponse,
    type QueryCreateParams as QueryCreateParams,
    type QueryFeedbackParams as QueryFeedbackParams,
    type QueryMetricsParams as QueryMetricsParams,
    type QueryRetrievalInfoParams as QueryRetrievalInfoParams,
  };
}
