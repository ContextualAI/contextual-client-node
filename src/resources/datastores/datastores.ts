// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DocumentsAPI from './documents';
import {
  DocumentCreateParams,
  DocumentDeleteResponse,
  DocumentDescription,
  DocumentDescriptionsDatastoresDocumentsListResponse,
  DocumentListParams,
  Documents,
  GetDocumentsResponse,
  IngestionResponse,
} from './documents';
import * as MetadataAPI from './metadata';
import { GetDatastoreResponse, Metadata } from './metadata';
import { DatastoresListResponse, type DatastoresListResponseParams } from '../../pagination';

export class Datastores extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

  /**
   * Create a new `Datastore`.
   *
   * A `Datastore` is a collection of documents. Documents can be ingested into and
   * deleted from a `Datastore`.
   *
   * A `Datastore` can be linked to one or more `Applications` to provide data on
   * which the `Application` can ground its answers. This linkage of `Datastore` to
   * `Application` is done through the `Create Application` or `Edit Application`
   * APIs.
   */
  create(
    body: DatastoreCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateDatastoreResponse> {
    return this._client.post('/datastores', { body, ...options });
  }

  /**
   * List all the `Datastores`.
   *
   * Performs `cursor`-based pagination if the number of `Datastores` exceeds the
   * requested `limit`. The returned `cursor` can be passed to the next
   * `GET /datastores` call to retrieve the next set of `Datastores`.
   */
  list(
    query?: DatastoreListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatastoreListResponsesDatastoresListResponse, DatastoreListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatastoreListResponsesDatastoresListResponse, DatastoreListResponse>;
  list(
    query: DatastoreListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatastoreListResponsesDatastoresListResponse, DatastoreListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/datastores', DatastoreListResponsesDatastoresListResponse, {
      query,
      ...options,
    });
  }

  /**
   * Delete a given `Datastore`, including all the documents ingested into it. This
   * operation is irreversible.
   */
  delete(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/datastores/${datastoreId}`, options);
  }
}

export class DatastoreListResponsesDatastoresListResponse extends DatastoresListResponse<DatastoreListResponse> {}

export interface CreateDatastoreResponse {
  /**
   * ID of the datastore
   */
  id: string;
}

export interface DatastoresResponse {
  /**
   * List of all datastores
   */
  datastores: Array<DatastoresResponse.Datastore>;

  /**
   * Total number of available datastores
   */
  total_count: number;

  /**
   * Next cursor to continue pagination. Omitted if there are no more datastores to
   * retrieve.
   */
  next_cursor?: string;
}

export namespace DatastoresResponse {
  /**
   * Datastore output entry with additional fields for public API.
   */
  export interface Datastore {
    /**
     * ID of the datastore
     */
    id: string;

    /**
     * Timestamp of when the datastore was created
     */
    created_at: string;

    /**
     * Name of the datastore
     */
    name: string;
  }
}

/**
 * Datastore output entry with additional fields for public API.
 */
export interface DatastoreListResponse {
  /**
   * ID of the datastore
   */
  id: string;

  /**
   * Timestamp of when the datastore was created
   */
  created_at: string;

  /**
   * Name of the datastore
   */
  name: string;
}

export type DatastoreDeleteResponse = unknown;

export interface DatastoreCreateParams {
  /**
   * Name of the datastore
   */
  name: string;
}

export interface DatastoreListParams extends DatastoresListResponseParams {
  /**
   * ID of the application used to filter datastores. If provided, only datastores
   * linked to this application will be returned.
   */
  application_id?: string;

  /**
   * Search text to filter datastores by name
   */
  search?: string;
}

Datastores.DatastoreListResponsesDatastoresListResponse = DatastoreListResponsesDatastoresListResponse;
Datastores.Metadata = Metadata;
Datastores.Documents = Documents;
Datastores.DocumentDescriptionsDatastoresDocumentsListResponse =
  DocumentDescriptionsDatastoresDocumentsListResponse;

export declare namespace Datastores {
  export {
    type CreateDatastoreResponse as CreateDatastoreResponse,
    type DatastoresResponse as DatastoresResponse,
    type DatastoreListResponse as DatastoreListResponse,
    type DatastoreDeleteResponse as DatastoreDeleteResponse,
    DatastoreListResponsesDatastoresListResponse as DatastoreListResponsesDatastoresListResponse,
    type DatastoreCreateParams as DatastoreCreateParams,
    type DatastoreListParams as DatastoreListParams,
  };

  export { Metadata as Metadata, type GetDatastoreResponse as GetDatastoreResponse };

  export {
    Documents as Documents,
    type DocumentDescription as DocumentDescription,
    type GetDocumentsResponse as GetDocumentsResponse,
    type IngestionResponse as IngestionResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    DocumentDescriptionsDatastoresDocumentsListResponse as DocumentDescriptionsDatastoresDocumentsListResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };
}
