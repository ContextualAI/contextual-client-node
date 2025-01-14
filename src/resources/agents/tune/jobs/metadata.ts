// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as JobsAPI from './jobs';

export class Metadata extends APIResource {
  /**
   * Retrieve the status of a specific tuning job. Fetches the current status and
   * evaluation results, if available, for the specified tuning job.
   */
  retrieve(
    agentId: string,
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobsAPI.GetTuneJobResponse> {
    return this._client.get(`/agents/${agentId}/tune/jobs/${jobId}/metadata`, options);
  }
}
