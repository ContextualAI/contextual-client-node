// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MetadataAPI from './metadata';
import {
  DocumentDescription,
  DocumentDescriptionsDatastoresDocumentsListPagination,
  Metadata,
} from './metadata';
import { type DatastoresDocumentsListPaginationParams } from '../../../pagination';

export class Documents extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

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
  ): Core.PagePromise<DocumentDescriptionsDatastoresDocumentsListPagination, MetadataAPI.DocumentDescription>;
  list(
    datastoreId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentDescriptionsDatastoresDocumentsListPagination, MetadataAPI.DocumentDescription>;
  list(
    datastoreId: string,
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    DocumentDescriptionsDatastoresDocumentsListPagination,
    MetadataAPI.DocumentDescription
  > {
    if (isRequestOptions(query)) {
      return this.list(datastoreId, {}, query);
    }
    return this._client.getAPIList(
      `/datastores/${datastoreId}/documents`,
      DocumentDescriptionsDatastoresDocumentsListPagination,
      { query, ...options },
    );
  }

  /**
   * Delete a given document from its `Datastore`. This operation is irreversible.
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

export interface DocumentListParams extends DatastoresDocumentsListPaginationParams {
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

export { DocumentDescriptionsDatastoresDocumentsListPagination };
