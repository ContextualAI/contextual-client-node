// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Retrieval extends APIResource {
  /**
   * Return content metadata of the contents used to generate response for a given
   * message.
   */
  info(
    agentId: string,
    messageId: string,
    query: RetrievalInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RetrievalInfoResponse> {
    return this._client.get(`/agents/${agentId}/query/${messageId}/retrieval/info`, { query, ...options });
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

export interface RetrievalInfoParams {
  /**
   * List of content ids for which to get the metadata.
   */
  content_ids: Array<string>;
}

export declare namespace Retrieval {
  export {
    type RetrievalInfoResponse as RetrievalInfoResponse,
    type RetrievalInfoParams as RetrievalInfoParams,
  };
}
