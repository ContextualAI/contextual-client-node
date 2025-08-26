// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { DocumentsPage, type DocumentsPageParams } from '../../pagination';

export class Documents extends APIResource {
  /**
   * Get list of documents in a given `Datastore`, including document `id`, `name`,
   * and ingestion job `status`.
   *
   * Performs `cursor`-based pagination if the number of documents exceeds the
   * requested `limit`. The returned `cursor` can be passed to the next
   * `GET /datastores/{datastore_id}/documents` call to retrieve the next set of
   * documents.
   */
  list(
    datastoreId: string,
    query?: DocumentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentMetadataDocumentsPage, DocumentMetadata>;
  list(
    datastoreId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentMetadataDocumentsPage, DocumentMetadata>;
  list(
    datastoreId: string,
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentMetadataDocumentsPage, DocumentMetadata> {
    if (isRequestOptions(query)) {
      return this.list(datastoreId, {}, query);
    }
    return this._client.getAPIList(`/datastores/${datastoreId}/documents`, DocumentMetadataDocumentsPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a given document from its `Datastore`. This operation is irreversible.
   */
  delete(datastoreId: string, documentId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/datastores/${datastoreId}/documents/${documentId}`, options);
  }

  /**
   * Get the parse results that are generated during ingestion for a given document.
   * Retrieving parse results for existing documents ingested before the release of
   * this endpoint is not supported and will return a 404 error.
   */
  getParseResult(
    datastoreId: string,
    documentId: string,
    query?: DocumentGetParseResultParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentGetParseResultResponse>;
  getParseResult(
    datastoreId: string,
    documentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentGetParseResultResponse>;
  getParseResult(
    datastoreId: string,
    documentId: string,
    query: DocumentGetParseResultParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentGetParseResultResponse> {
    if (isRequestOptions(query)) {
      return this.getParseResult(datastoreId, documentId, {}, query);
    }
    return this._client.get(`/datastores/${datastoreId}/documents/${documentId}/parse`, {
      query,
      ...options,
    });
  }

  /**
   * Ingest a document into a given `Datastore`.
   *
   * Ingestion is an asynchronous task. Returns a document `id` which can be used to
   * track the status of the ingestion job through calls to the
   * `GET /datastores/{datastore_id}/documents/{document_id}/metadata` API.
   *
   * This `id` can also be used to delete the document through the
   * `DELETE /datastores/{datastore_id}/documents/{document_id}` API.
   *
   * `file` must be a PDF, HTML, DOC(X) or PPT(X) file. The filename must end with
   * one of the following extensions: `.pdf`, `.html`, `.htm`, `.mhtml`, `.doc`,
   * `.docx`, `.ppt`, `.pptx`.
   */
  ingest(
    datastoreId: string,
    body: DocumentIngestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IngestionResponse> {
    return this._client.post(
      `/datastores/${datastoreId}/documents`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Get details of a given document, including its `name` and ingestion job
   * `status`.
   */
  metadata(
    datastoreId: string,
    documentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentMetadata> {
    return this._client.get(`/datastores/${datastoreId}/documents/${documentId}/metadata`, options);
  }

  /**
   * Post details of a given document that will enrich the chunk and be added to the
   * context or just for filtering. If Just for filtering, start with "\_" in the
   * key.
   */
  setMetadata(
    datastoreId: string,
    documentId: string,
    body: DocumentSetMetadataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentMetadata> {
    return this._client.post(`/datastores/${datastoreId}/documents/${documentId}/metadata`, {
      body,
      ...options,
    });
  }
}

export class DocumentMetadataDocumentsPage extends DocumentsPage<DocumentMetadata> {}

/**
 * Defines a custom metadata filter. The expected input is a dict which can have
 * different operators, fields and values. For example:
 *
 *     {"field": "title", "operator": "startswith", "value": "hr-"}
 *
 * For document_id and date_created the query is built using direct query without
 * nesting.
 */
export interface BaseMetadataFilter {
  /**
   * Field name to search for in the metadata
   */
  field: string;

  /**
   * Operator to be used for the filter.
   */
  operator:
    | 'equals'
    | 'containsany'
    | 'exists'
    | 'startswith'
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'notequals'
    | 'between'
    | 'wildcard';

  /**
   * The value to be searched for in the field. In case of exists operator, it is not
   * needed.
   */
  value?: string | number | boolean | Array<string | number | boolean> | null;
}

/**
 * "Defines a custom metadata filter as a Composite MetadataFilter. Which can be be
 * a list of filters or nested filters.
 */
export interface CompositeMetadataFilter {
  /**
   * Filters added to the query for filtering docs
   */
  filters: Array<BaseMetadataFilter | CompositeMetadataFilter>;

  /**
   * Composite operator to be used to combine filters
   */
  operator?: 'AND' | 'OR' | 'AND_NOT' | null;
}

/**
 * Document description
 */
export interface DocumentMetadata {
  /**
   * ID of the document that was ingested
   */
  id: string;

  /**
   * Timestamp of when the document was created in ISO format.
   */
  created_at: string;

  /**
   * User specified name of the document
   */
  name: string;

  /**
   * Status of this document's ingestion job
   */
  status: 'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled';

  /**
   * Custom metadata for the document, provided by the user at ingestion time.Must be
   * a JSON-serializable dictionary with string keys and simple primitive values
   * (str, int, float, bool). The total size must not exceed 2 KB.The strings with
   * date format must stay in date format or be avodied if not in date format.The
   * 'custom_metadata.url' field is automatically included in returned attributions
   * during query time, if provided.The default maximum metadata fields that can be
   * used is 15, contact support if more is needed.
   */
  custom_metadata?: { [key: string]: boolean | number | string };

  /**
   * A dictionary mapping metadata field names to the configuration to use for each
   * field.
   *
   *         - If a metadata field is not present in the dictionary, the default configuration will be used.
   *
   *         - If the dictionary is not provided, metadata will be added in chunks but will not be retrievable.
   *
   *
   *         Limits: - Maximum characters per metadata field (for prompt or rerank): 400
   *
   *         - Maximum number of metadata fields (for prompt or retrieval): 10
   *
   *
   *         Contact support@contextual.ai to request quota increases.
   */
  custom_metadata_config?: { [key: string]: DocumentMetadata.CustomMetadataConfig };

  /**
   * Whether the user has access to this document.
   */
  has_access?: boolean;

  /**
   * Ingestion configuration for the document when the document was ingested. It may
   * be different from the current datastore configuration.
   */
  ingestion_config?: unknown;

  /**
   * Timestamp of when the document was modified in ISO format.
   */
  updated_at?: string;
}

export namespace DocumentMetadata {
  export interface CustomMetadataConfig {
    /**
     * Whether to use in filtering. Defaults to True
     */
    filterable?: boolean;

    /**
     * Whether to add in chunks. Defaults to True. The maximum amount of characters per
     * metadata field that can be added to the prompt or rerank is 400. The maximum
     * amount of metadata fields that can be added for prompt or retrieval is 10.
     * Contact support@contextual.ai to request quota increases.
     */
    in_chunks?: boolean;

    /**
     * Whether to add in response. Defaults to False
     */
    returned_in_response?: boolean;
  }
}

/**
 * Response body from POST /data/documents
 */
export interface IngestionResponse {
  /**
   * ID of the document being ingested
   */
  id: string;
}

/**
 * Response body from GET /data/documents
 */
export interface ListDocumentsResponse {
  /**
   * List of documents retrieved based on the user's GET request
   */
  documents: Array<DocumentMetadata>;

  /**
   * Next cursor to continue pagination. Ommitted if there are no more documents
   * after these ones, or if job_id was set in the request.
   */
  next_cursor?: string;

  /**
   * Total number of available documents which would be returned by the request if no
   * limit were specified. Ommitted if job_id was set in the request.
   */
  total_count?: number;
}

export type DocumentDeleteResponse = unknown;

/**
 * /parse results reponse object.
 */
export interface DocumentGetParseResultResponse {
  /**
   * The name of the file that was uploaded for parsing
   */
  file_name: string;

  /**
   * The current status of the parse job
   */
  status: 'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled';

  /**
   * Document-level metadata parsed from the document
   */
  document_metadata?: DocumentGetParseResultResponse.DocumentMetadata;

  /**
   * The parsed, structured Markdown of the input file. Only present if
   * `markdown-document` was among the requested output types.
   */
  markdown_document?: string;

  /**
   * Per-page parse results, containing per-page Markdown (if `markdown-per-page` was
   * requested) and/or per-page `ParsedBlock`s (if `blocks-per-page` was requested).
   */
  pages?: Array<DocumentGetParseResultResponse.Page>;
}

export namespace DocumentGetParseResultResponse {
  /**
   * Document-level metadata parsed from the document
   */
  export interface DocumentMetadata {
    /**
     * Hierarchy of the document, as both heading blocks and a markdown table of
     * contents
     */
    hierarchy?: DocumentMetadata.Hierarchy;
  }

  export namespace DocumentMetadata {
    /**
     * Hierarchy of the document, as both heading blocks and a markdown table of
     * contents
     */
    export interface Hierarchy {
      /**
       * Heading blocks which define the hierarchy of the document
       */
      blocks?: Array<Hierarchy.Block>;

      /**
       * Markdown representation of the table of contents for this document
       */
      table_of_contents?: string;
    }

    export namespace Hierarchy {
      /**
       * One logical block of content from a parsed page.
       */
      export interface Block {
        /**
         * Unique ID of the block
         */
        id: string;

        /**
         * The normalized bounding box of the block, as relative percentages of the page
         * width and height
         */
        bounding_box: Block.BoundingBox;

        /**
         * The Markdown representation of the block
         */
        markdown: string;

        /**
         * The type of the block
         */
        type: 'heading' | 'text' | 'table' | 'figure';

        /**
         * The confidence level of this block categorized as 'low', 'medium', or 'high'.
         * Only available for blocks of type 'table' currently.
         */
        confidence_level?: 'low' | 'medium' | 'high';

        /**
         * The level of the block in the document hierarchy, starting at 0 for the
         * root-level title block. Only present if `enable_document_hierarchy` was set to
         * true in the request.
         */
        hierarchy_level?: number;

        /**
         * The page (0-indexed) that this block belongs to. Only set for heading blocks
         * that are returned in the table of contents.
         */
        page_index?: number;

        /**
         * The IDs of the parent in the document hierarchy, sorted from root-level to
         * bottom. For root-level heading blocks, this will be an empty list. Only present
         * if `enable_document_hierarchy` was set to true in the request.
         */
        parent_ids?: Array<string>;
      }

      export namespace Block {
        /**
         * The normalized bounding box of the block, as relative percentages of the page
         * width and height
         */
        export interface BoundingBox {
          /**
           * The x-coordinate of the top-left corner of the bounding box
           */
          x0: number;

          /**
           * The x-coordinate of the bottom-right corner of the bounding box
           */
          x1: number;

          /**
           * The y-coordinate of the top-left corner of the bounding box
           */
          y0: number;

          /**
           * The y-coordinate of the bottom-right corner of the bounding box
           */
          y1: number;
        }
      }
    }
  }

  /**
   * Per-page parse results.
   */
  export interface Page {
    /**
     * The index of the parsed page (zero-indexed)
     */
    index: number;

    /**
     * The parsed, structured blocks of this page. Present if `blocks-per-page` was
     * among the requested output types.
     */
    blocks?: Array<Page.Block>;

    /**
     * The parsed, structured Markdown of this page. Present if `markdown-per-page` was
     * among the requested output types.
     */
    markdown?: string;
  }

  export namespace Page {
    /**
     * One logical block of content from a parsed page.
     */
    export interface Block {
      /**
       * Unique ID of the block
       */
      id: string;

      /**
       * The normalized bounding box of the block, as relative percentages of the page
       * width and height
       */
      bounding_box: Block.BoundingBox;

      /**
       * The Markdown representation of the block
       */
      markdown: string;

      /**
       * The type of the block
       */
      type: 'heading' | 'text' | 'table' | 'figure';

      /**
       * The confidence level of this block categorized as 'low', 'medium', or 'high'.
       * Only available for blocks of type 'table' currently.
       */
      confidence_level?: 'low' | 'medium' | 'high';

      /**
       * The level of the block in the document hierarchy, starting at 0 for the
       * root-level title block. Only present if `enable_document_hierarchy` was set to
       * true in the request.
       */
      hierarchy_level?: number;

      /**
       * The page (0-indexed) that this block belongs to. Only set for heading blocks
       * that are returned in the table of contents.
       */
      page_index?: number;

      /**
       * The IDs of the parent in the document hierarchy, sorted from root-level to
       * bottom. For root-level heading blocks, this will be an empty list. Only present
       * if `enable_document_hierarchy` was set to true in the request.
       */
      parent_ids?: Array<string>;
    }

    export namespace Block {
      /**
       * The normalized bounding box of the block, as relative percentages of the page
       * width and height
       */
      export interface BoundingBox {
        /**
         * The x-coordinate of the top-left corner of the bounding box
         */
        x0: number;

        /**
         * The x-coordinate of the bottom-right corner of the bounding box
         */
        x1: number;

        /**
         * The y-coordinate of the top-left corner of the bounding box
         */
        y0: number;

        /**
         * The y-coordinate of the bottom-right corner of the bounding box
         */
        y1: number;
      }
    }
  }
}

export interface DocumentListParams extends DocumentsPageParams {
  /**
   * Filters documents with the given prefix.
   */
  document_name_prefix?: string;

  /**
   * Filters documents whose ingestion job status matches (one of) the provided
   * status(es).
   */
  ingestion_job_status?: Array<'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled'>;

  /**
   * Filters documents uploaded at or after specified timestamp.
   */
  uploaded_after?: string;

  /**
   * Filters documents uploaded at or before specified timestamp.
   */
  uploaded_before?: string;
}

export interface DocumentGetParseResultParams {
  /**
   * The desired output format(s) of the parsed file. Must be `markdown-document`,
   * `markdown-per-page`, and/or `blocks-per-page`. Specify multiple values to get
   * multiple formats in the response. `markdown-document` parses the whole document
   * into a single concatenated markdown output. `markdown-per-page` provides
   * markdown output per page. `blocks-per-page` provides a structured JSON
   * representation of the content blocks on each page, sorted by reading order.
   */
  output_types?: Array<'markdown-document' | 'markdown-per-page' | 'blocks-per-page'>;
}

export interface DocumentIngestParams {
  /**
   * File to ingest.
   */
  file: Core.Uploadable;

  /**
   * Metadata request in JSON format. `custom_metadata` is a flat dictionary
   * containing one or more key-value pairs, where each value must be a primitive
   * type (`str`, `bool`, `float`, or `int`). The default maximum metadata fields
   * that can be used is 15, contact support if more is needed.The combined size of
   * the metadata must not exceed **2 KB** when encoded as JSON.The strings with date
   * format must stay in date format or be avoided if not in date format.The
   * `custom_metadata.url` field is automatically included in returned attributions
   * during query time, if provided.
   *
   * **Example Request Body:**
   *
   * ```json
   * {
   *   "custom_metadata": {
   *     "topic": "science",
   *     "difficulty": 3
   *   }
   * }
   * ```
   */
  metadata?: string;
}

export interface DocumentSetMetadataParams {
  /**
   * Custom metadata for the document, provided by the user at ingestion time.Must be
   * a JSON-serializable dictionary with string keys and simple primitive values
   * (str, int, float, bool). The total size must not exceed 2 KB.The strings with
   * date format must stay in date format or be avodied if not in date format.The
   * 'custom_metadata.url' field is automatically included in returned attributions
   * during query time, if provided.The default maximum metadata fields that can be
   * used is 15, contact support if more is needed.
   */
  custom_metadata?: { [key: string]: boolean | number | string };

  /**
   * A dictionary mapping metadata field names to the configuration to use for each
   * field.
   *
   *         - If a metadata field is not present in the dictionary, the default configuration will be used.
   *
   *         - If the dictionary is not provided, metadata will be added in chunks but will not be retrievable.
   *
   *
   *         Limits: - Maximum characters per metadata field (for prompt or rerank): 400
   *
   *         - Maximum number of metadata fields (for prompt or retrieval): 10
   *
   *
   *         Contact support@contextual.ai to request quota increases.
   */
  custom_metadata_config?: { [key: string]: DocumentSetMetadataParams.CustomMetadataConfig };
}

export namespace DocumentSetMetadataParams {
  export interface CustomMetadataConfig {
    /**
     * Whether to use in filtering. Defaults to True
     */
    filterable?: boolean;

    /**
     * Whether to add in chunks. Defaults to True. The maximum amount of characters per
     * metadata field that can be added to the prompt or rerank is 400. The maximum
     * amount of metadata fields that can be added for prompt or retrieval is 10.
     * Contact support@contextual.ai to request quota increases.
     */
    in_chunks?: boolean;

    /**
     * Whether to add in response. Defaults to False
     */
    returned_in_response?: boolean;
  }
}

Documents.DocumentMetadataDocumentsPage = DocumentMetadataDocumentsPage;

export declare namespace Documents {
  export {
    type BaseMetadataFilter as BaseMetadataFilter,
    type CompositeMetadataFilter as CompositeMetadataFilter,
    type DocumentMetadata as DocumentMetadata,
    type IngestionResponse as IngestionResponse,
    type ListDocumentsResponse as ListDocumentsResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentGetParseResultResponse as DocumentGetParseResultResponse,
    DocumentMetadataDocumentsPage as DocumentMetadataDocumentsPage,
    type DocumentListParams as DocumentListParams,
    type DocumentGetParseResultParams as DocumentGetParseResultParams,
    type DocumentIngestParams as DocumentIngestParams,
    type DocumentSetMetadataParams as DocumentSetMetadataParams,
  };
}
