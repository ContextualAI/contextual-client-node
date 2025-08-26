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
    type DocumentMetadata as DocumentMetadata,
    type IngestionResponse as IngestionResponse,
    type ListDocumentsResponse as ListDocumentsResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    DocumentMetadataDocumentsPage as DocumentMetadataDocumentsPage,
    type DocumentListParams as DocumentListParams,
    type DocumentIngestParams as DocumentIngestParams,
    type DocumentSetMetadataParams as DocumentSetMetadataParams,
  };
}
