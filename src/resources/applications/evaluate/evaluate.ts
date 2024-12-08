// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as JobsAPI from './jobs/jobs';
import { EvaluationRoundResponse, JobCancelResponse, Jobs, ListEvaluationResponse } from './jobs/jobs';

export class Evaluate extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Launch an evaluation round.
   */
  launch(
    applicationId: string,
    body: EvaluateLaunchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LaunchEvaluationResponse> {
    return this._client.post(
      `/applications/${applicationId}/evaluate`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

/**
 * Response from Launch Evaluation request
 */
export interface LaunchEvaluationResponse {
  /**
   * ID of the launched evaluation
   */
  id: string;
}

export interface EvaluateLaunchParams {
  /**
   * List of metrics to use. Supported metrics are `equivalence` and `groundedness`.
   */
  metrics: Array<'equivalence' | 'groundedness'>;

  /**
   * Evalset file (CSV) to use for evaluation, containing the columns `prompt`
   * (`question`), `reference` (`ground truth response`), and optional additional
   * columns based on the selected metrics. Either `dataset_name` or `evalset_file`
   * must be provided, but not both.
   */
  evalset_file?: Core.Uploadable;

  /**
   * Name of the dataset to use for evaluation, created through the dataset API.
   * Either `dataset_name` or `evalset_file` must be provided, but not both.
   */
  evalset_name?: string;

  /**
   * Model name of the tuned or aligned model to use. Defaults to the default model
   * if not specified.
   */
  model_name?: string;
}

Evaluate.Jobs = Jobs;

export declare namespace Evaluate {
  export {
    type LaunchEvaluationResponse as LaunchEvaluationResponse,
    type EvaluateLaunchParams as EvaluateLaunchParams,
  };

  export {
    Jobs as Jobs,
    type EvaluationRoundResponse as EvaluationRoundResponse,
    type ListEvaluationResponse as ListEvaluationResponse,
    type JobCancelResponse as JobCancelResponse,
  };
}
