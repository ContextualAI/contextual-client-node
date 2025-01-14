// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DatasetsAPI from './datasets';

export class Metadata extends APIResource {
  /**
   * Retrieve details of a specific `Dataset` version, or the latest version if no
   * `version` is specified.
   *
   * Provides comprehensive information about the `Dataset`, including its metadata
   * and schema.
   */
  retrieve(
    agentId: string,
    datasetName: string,
    query?: MetadataRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.GetDatasetResponse>;
  retrieve(
    agentId: string,
    datasetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.GetDatasetResponse>;
  retrieve(
    agentId: string,
    datasetName: string,
    query: MetadataRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.GetDatasetResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(agentId, datasetName, {}, query);
    }
    return this._client.get(`/agents/${agentId}/datasets/${datasetName}/metadata`, { query, ...options });
  }
}

export interface MetadataRetrieveParams {
  /**
   * Version number of the dataset. Defaults to the latest version if not specified.
   */
  version?: string;
}

export declare namespace Metadata {
  export { type MetadataRetrieveParams as MetadataRetrieveParams };
}
