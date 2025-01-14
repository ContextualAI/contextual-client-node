// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Metadata extends APIResource {
  /**
   * Get the details of a given `Datastore`, including its name, create time, and the
   * list of `Agents` which are currently configured to use the `Datastore`.
   */
  retrieve(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<DatastoreMetadataResponse> {
    return this._client.get(`/datastores/${datastoreId}/metadata`, options);
  }
}

export interface DatastoreMetadataResponse {
  /**
   * List of agents using this datastore
   */
  agent_ids: Array<string>;

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
  export { type DatastoreMetadataResponse as DatastoreMetadataResponse };
}
