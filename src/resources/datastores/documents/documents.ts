// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MetadataAPI from './metadata';
import { DocumentDescription, Metadata } from './metadata';

export class Documents extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

  /**
   * Upload a document to a given datastore.
   */
  create(
    datastoreId: string,
    body: DocumentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IngestionResponse> {
    return this._client.post(
      `/datastores/${datastoreId}/documents`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Get list of documents in a given datastore.
   */
  list(
    datastoreId: string,
    query?: DocumentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetDocumentsResponse>;
  list(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<GetDocumentsResponse>;
  list(
    datastoreId: string,
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetDocumentsResponse> {
    if (isRequestOptions(query)) {
      return this.list(datastoreId, {}, query);
    }
    return this._client.get(`/datastores/${datastoreId}/documents`, { query, ...options });
  }

  /**
   * Delete a given document.
   */
  delete(datastoreId: string, documentId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/datastores/${datastoreId}/documents/${documentId}`, options);
  }
}

/**
 * Response body from GET /data/documents
 */
export interface GetDocumentsResponse {
  /**
   * List of documents retrieved based on the user's GET request
   */
  documents: Array<MetadataAPI.DocumentDescription>;

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

/**
 * Response body from POST /data/documents
 */
export interface IngestionResponse {
  /**
   * ID of the document being ingested
   */
  id: string;
}

export type DocumentDeleteResponse = unknown;

export interface DocumentCreateParams {
  /**
   * File to ingest
   */
  file: Core.Uploadable;
}

export interface DocumentListParams {
  /**
   * Cursor from the previous call to list documents, used to retrieve the next set
   * of results
   */
  cursor?: string;

  /**
   * Filters documents whose ingestion job status matches (one of) the provided
   * status(es).
   */
  ingestion_job_status?: Array<'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled'>;

  /**
   * Maximum number of documents to return
   */
  limit?: number;

  /**
   * Filters documents uploaded at or after specified timestamp.
   */
  uploaded_after?: string;

  /**
   * Filters documents uploaded at or before specified timestamp.
   */
  uploaded_before?: string;
}

Documents.Metadata = Metadata;

export declare namespace Documents {
  export {
    type GetDocumentsResponse as GetDocumentsResponse,
    type IngestionResponse as IngestionResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };

  export { Metadata as Metadata, type DocumentDescription as DocumentDescription };
}
