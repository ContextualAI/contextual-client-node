// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Metrics extends APIResource {
  /**
   * Get feedbacks a given application.
   */
  retrieve(
    applicationId: string,
    query?: MetricRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricRetrieveResponse>;
  retrieve(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<MetricRetrieveResponse>;
  retrieve(
    applicationId: string,
    query: MetricRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetricRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(applicationId, {}, query);
    }
    return this._client.get(`/applications/${applicationId}/metrics`, { query, ...options });
  }
}

export interface MetricRetrieveResponse {
  /**
   * Total number of messages.
   */
  total_count: number;

  /**
   * List of messages.
   */
  messages?: Array<unknown>;

  /**
   * Offset for the next page. If there are no more messages to get, then this is not
   * set.
   */
  next_offset?: number;
}

export interface MetricRetrieveParams {
  /**
   * Filters messages that are created before specified timestamp.
   */
  created_after?: string;

  /**
   * Filters messages that are created after specified timestamp.
   */
  created_before?: string;

  /**
   * Filters messages from contextual.
   */
  include_contextual?: boolean;

  /**
   * Limits the number of messages to return.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: number;
}

export declare namespace Metrics {
  export {
    type MetricRetrieveResponse as MetricRetrieveResponse,
    type MetricRetrieveParams as MetricRetrieveParams,
  };
}
