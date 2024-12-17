// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Metadata extends APIResource {
  /**
   * Get details of a given document.
   */
  retrieve(
    datastoreId: string,
    documentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentDescription> {
    return this._client.get(`/datastores/${datastoreId}/documents/${documentId}/metadata`, options);
  }
}

/**
 * Document description
 */
export interface DocumentDescription {
  /**
   * ID of the document that was ingested
   */
  id: string;

  /**
   * User specified name of the document
   */
  name: string;

  /**
   * Status of this document's ingestion job
   */
  status: string;
}

export declare namespace Metadata {
  export { type DocumentDescription as DocumentDescription };
}