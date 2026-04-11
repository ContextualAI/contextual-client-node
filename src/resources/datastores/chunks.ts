// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Chunks extends APIResource {
  /**
   * Edit the content of a specific chunk in a datastore. This operation updates the
   * chunk's text content and regenerates its embeddings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.datastores.chunks.updateContent(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { content: 'content' },
   *   );
   * ```
   */
  updateContent(
    datastoreId: string,
    contentId: string,
    body: ChunkUpdateContentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChunkUpdateContentResponse> {
    return this._client.put(`/datastores/${datastoreId}/chunks/${contentId}/content`, { body, ...options });
  }
}

export interface ChunkUpdateContentResponse {}

export interface ChunkUpdateContentParams {
  /**
   * The new content text for the chunk
   */
  content: string;
}

export declare namespace Chunks {
  export {
    type ChunkUpdateContentResponse as ChunkUpdateContentResponse,
    type ChunkUpdateContentParams as ChunkUpdateContentParams,
  };
}
