// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as JobsAPI from './jobs';

export class Metadata extends APIResource {
  /**
   * Get an `Evaluation` round's status and results.
   */
  retrieve(
    applicationId: string,
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobsAPI.EvaluationRoundResponse> {
    return this._client.get(`/applications/${applicationId}/evaluate/jobs/${jobId}/metadata`, options);
  }
}
