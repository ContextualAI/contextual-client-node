// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DocumentsAPI from './documents';
import {
  DocumentCreateParams,
  DocumentDeleteResponse,
  DocumentDescription,
  DocumentDescriptionsDocumentsPage,
  DocumentListParams,
  Documents,
  GetDocumentsResponse,
  IngestionResponse,
} from './documents';
import * as MetadataAPI from './metadata';
import { GetDatastoreResponse, Metadata } from './metadata';
import { DatastoresPage, type DatastoresPageParams } from '../../pagination';

export class Datastores extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

  /**
   * Create a new `Datastore`.
   *
   * A `Datastore` is a collection of documents. Documents can be ingested into and
   * deleted from a `Datastore`.
   *
   * A `Datastore` can be linked to one or more `Agents` to provide data on which the
   * `Agent` can ground its answers. This linkage of `Datastore` to `Agent` is done
   * through the `Create Agent` or `Edit Agent` APIs.
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
  ): Core.PagePromise<DatastoresDatastoresPage, Datastore>;
  list(options?: Core.RequestOptions): Core.PagePromise<DatastoresDatastoresPage, Datastore>;
  list(
    query: DatastoreListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatastoresDatastoresPage, Datastore> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/datastores', DatastoresDatastoresPage, { query, ...options });
  }

  /**
   * Delete a given `Datastore`, including all the documents ingested into it. This
   * operation is irreversible.
   *
   * This operation will fail with status code 400 if there is an active `Agent`
   * associated with the `Datastore`.
   */
  delete(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/datastores/${datastoreId}`, options);
  }
}

export class DatastoresDatastoresPage extends DatastoresPage<Datastore> {}

export interface CreateDatastoreResponse {
  /**
   * ID of the datastore
   */
  id: string;
}

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

export interface DatastoresResponse {
  /**
   * List of all datastores
   */
  datastores: Array<Datastore>;

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

export type DatastoreDeleteResponse = unknown;

export interface DatastoreCreateParams {
  /**
   * Name of the datastore
   */
  name: string;
}

export interface DatastoreListParams extends DatastoresPageParams {
  /**
   * ID of the agent used to filter datastores. If provided, only datastores linked
   * to this agent will be returned.
   */
  agent_id?: string;
}

Datastores.DatastoresDatastoresPage = DatastoresDatastoresPage;
Datastores.Metadata = Metadata;
Datastores.Documents = Documents;
Datastores.DocumentDescriptionsDocumentsPage = DocumentDescriptionsDocumentsPage;

export declare namespace Datastores {
  export {
    type CreateDatastoreResponse as CreateDatastoreResponse,
    type Datastore as Datastore,
    type DatastoresResponse as DatastoresResponse,
    type DatastoreDeleteResponse as DatastoreDeleteResponse,
    DatastoresDatastoresPage as DatastoresDatastoresPage,
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
    DocumentDescriptionsDocumentsPage as DocumentDescriptionsDocumentsPage,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };
}
