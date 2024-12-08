// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Metadata extends APIResource {
  /**
   * Get the details of a given datastore.
   */
  retrieve(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<GetDatastoreResponse> {
    return this._client.get(`/datastores/${datastoreId}/metadata`, options);
  }
}

export interface GetDatastoreResponse {
  /**
   * List of applications using this datastore
   */
  application_ids: Array<string>;

  /**
   * Timestamp of when the datastore was created
   */
  created_at: string;

  /**
   * Name of the datastore
   */
  name: string;
}

export declare namespace Metadata {
  export { type GetDatastoreResponse as GetDatastoreResponse };
}
