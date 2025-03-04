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
   * `file` must be a PDF or HTML file.
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
   * context or just for filtering. If JUst for filtering, start with "\_" in the
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

  custom_metadata?: Record<string, boolean | number | string>;

  /**
   * Timestamp of when the document was modified in ISO format.
   */
  updated_at?: string;
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
   * File to ingest
   */
  file: Core.Uploadable;

  /**
   * Metadata in `JSON` format. Metadata should be passed in a nested dictionary
   * structure of `str` metadata type to `Dict` mapping `str` metadata keys to `str`,
   * `bool`, `float` or `int` values. Currently, `custom_metadata` is the only
   * supported metadata type.Example `metadata` dictionary: {"metadata":
   * {"custom_metadata": {"customKey1": "value3", "\_filterKey": "filterValue3"}}
   */
  metadata?: string;
}

export interface DocumentSetMetadataParams {
  custom_metadata?: Record<string, boolean | number | string>;
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
