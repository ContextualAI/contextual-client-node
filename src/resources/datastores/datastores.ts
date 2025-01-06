// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MetadataAPI from './metadata';
import { GetDatastoreResponse, Metadata } from './metadata';
import * as DocumentsAPI from './documents/documents';
import {
  DocumentCreateParams,
  DocumentDeleteResponse,
  DocumentListParams,
  Documents,
  GetDocumentsResponse,
  IngestionResponse,
} from './documents/documents';

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
  create(body: DatastoreCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateDatastoreOutput> {
    return this._client.post('/datastores', { body, ...options });
  }

  /**
   * List all the `Datastores`.
   *
   * Performs `cursor`-based pagination if the number of `Datastores` exceeds the
   * requested `limit`. The returned `cursor` can be passed to the next
   * `GET /datastores` call to retrieve the next set of `Datastores`.
   */
  list(query?: DatastoreListParams, options?: Core.RequestOptions): Core.APIPromise<Datastore>;
  list(options?: Core.RequestOptions): Core.APIPromise<Datastore>;
  list(
    query: DatastoreListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Datastore> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/datastores', { query, ...options });
  }

  /**
   * Delete a given `Datastore`, including all the documents ingested into it. This
   * operation is irreversible.
   */
  delete(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/datastores/${datastoreId}`, options);
  }
}

export interface CreateDatastoreOutput {
  /**
   * ID of the datastore
   */
  id: string;
}

export interface Datastore {
  /**
   * List of all datastores
   */
  datastores: Array<Datastore.Datastore>;

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

export namespace Datastore {
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

export type DatastoreDeleteResponse = unknown;

export interface DatastoreCreateParams {
  /**
   * Name of the datastore
   */
  name: string;
}

export interface DatastoreListParams {
  /**
   * ID of the application used to filter datastores. If provided, only datastores
   * linked to this application will be returned.
   */
  application_id?: string;

  /**
   * Cursor from the previous call to list datastores, used to retrieve the next set
   * of results
   */
  cursor?: string;

  /**
   * Maximum number of datastores to return
   */
  limit?: number;
}

Datastores.Metadata = Metadata;
Datastores.Documents = Documents;

export declare namespace Datastores {
  export {
    type CreateDatastoreOutput as CreateDatastoreOutput,
    type Datastore as Datastore,
    type DatastoreDeleteResponse as DatastoreDeleteResponse,
    type DatastoreCreateParams as DatastoreCreateParams,
    type DatastoreListParams as DatastoreListParams,
  };

  export { Metadata as Metadata, type GetDatastoreResponse as GetDatastoreResponse };

  export {
    Documents as Documents,
    type GetDocumentsResponse as GetDocumentsResponse,
    type IngestionResponse as IngestionResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };
}
