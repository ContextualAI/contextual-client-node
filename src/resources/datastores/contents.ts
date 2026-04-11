// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { ContentsPage, type ContentsPageParams } from '../../pagination';

export class Contents extends APIResource {
  /**
   * Get Document Contents
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const contentListResponse of client.datastores.contents.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    datastoreId: string,
    query?: ContentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ContentListResponsesContentsPage, ContentListResponse>;
  list(
    datastoreId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ContentListResponsesContentsPage, ContentListResponse>;
  list(
    datastoreId: string,
    query: ContentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ContentListResponsesContentsPage, ContentListResponse> {
    if (isRequestOptions(query)) {
      return this.list(datastoreId, {}, query);
    }
    return this._client.getAPIList(`/datastores/${datastoreId}/contents`, ContentListResponsesContentsPage, {
      query,
      ...options,
    });
  }

  /**
   * Get Content Metadata
   *
   * @example
   * ```ts
   * const response = await client.datastores.contents.metadata(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  metadata(
    datastoreId: string,
    contentId: string,
    query?: ContentMetadataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentMetadataResponse>;
  metadata(
    datastoreId: string,
    contentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentMetadataResponse>;
  metadata(
    datastoreId: string,
    contentId: string,
    query: ContentMetadataParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContentMetadataResponse> {
    if (isRequestOptions(query)) {
      return this.metadata(datastoreId, contentId, {}, query);
    }
    return this._client.get(`/datastores/${datastoreId}/contents/${contentId}/metadata`, {
      query,
      ...options,
    });
  }
}

export class ContentListResponsesContentsPage extends ContentsPage<ContentListResponse> {}

/**
 * Content entry type
 */
export type ContentListResponse =
  | ContentListResponse.DocumentContentEntry
  | ContentListResponse.StructuredContentEntry;

export namespace ContentListResponse {
  export interface DocumentContentEntry {
    /**
     * ID of the content
     */
    content_id: string;

    /**
     * Page number of the content
     */
    page_number: number;

    content_type?: 'unstructured';
  }

  /**
   * Tabular content entry used in query retrieval.
   */
  export interface StructuredContentEntry {
    /**
     * ID of the content
     */
    content_id: string;

    /**
     * Name of the table
     */
    table_name: string;

    content_type?: 'structured';

    /**
     * Name of the schema of the table
     */
    schema?: string | null;
  }
}

/**
 * Content type
 */
export type ContentMetadataResponse =
  | ContentMetadataResponse.UnstructuredContentMetadata
  | ContentMetadataResponse.StructuredContentMetadata
  | ContentMetadataResponse.FileAnalysisContentMetadata;

export namespace ContentMetadataResponse {
  export interface UnstructuredContentMetadata {
    /**
     * Id of the content.
     */
    content_id: string;

    /**
     * Text of the content.
     */
    content_text: string;

    /**
     * Id of the document which the content belongs to.
     */
    document_id: string;

    /**
     * Height of the image.
     */
    height: number;

    /**
     * Page number of the content.
     */
    page: number;

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

    content_type?: 'unstructured';
  }

  export interface StructuredContentMetadata {
    /**
     * Id of the content.
     */
    content_id: string;

    /**
     * Text of the content.
     */
    content_text: unknown;

    content_type?: 'structured';
  }

  export interface FileAnalysisContentMetadata {
    /**
     * Id of the content.
     */
    content_id: string;

    /**
     * Format of the file.
     */
    file_format: string;

    /**
     * GCP location of the file.
     */
    gcp_location: string;

    content_type?: 'file_analysis';
  }
}

export interface ContentListParams extends ContentsPageParams {
  /**
   * Document ID of the document to retrieve details for
   */
  document_id?: string;

  /**
   * The query to search keywords for
   */
  search?: string;
}

export interface ContentMetadataParams {
  cursor?: string;
}

Contents.ContentListResponsesContentsPage = ContentListResponsesContentsPage;

export declare namespace Contents {
  export {
    type ContentListResponse as ContentListResponse,
    type ContentMetadataResponse as ContentMetadataResponse,
    ContentListResponsesContentsPage as ContentListResponsesContentsPage,
    type ContentListParams as ContentListParams,
    type ContentMetadataParams as ContentMetadataParams,
  };
}
