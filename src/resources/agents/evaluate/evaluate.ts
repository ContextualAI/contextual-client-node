// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as JobsAPI from './jobs/jobs';
import { EvaluationRoundResponse, JobCancelResponse, Jobs, ListEvaluationResponse } from './jobs/jobs';

export class Evaluate extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Launch an `Evaluation` round.
   *
   * An `Evaluation` is an asynchronous operation which evaluates an `Agent` on a set
   * of test questions and reference answers. An `Evaluation` can select one or more
   * metrics to assess the quality of generated answers. These metrics include
   * `equivalence` and `groundedness`.
   *
   * `Evaluation` test set data can be provided in one of two forms: - A CSV
   * `evalset_file` containing the columns `prompt`, `reference` (i.e. gold-answers),
   * and `knowledge` (optional `list[str]` of retrieved knowledge) - A `dataset_name`
   * which refers to an `evaluation_set` `Dataset` created through the `Dataset` API.
   */
  launch(
    agentId: string,
    body: EvaluateLaunchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LaunchEvaluationResponse> {
    return this._client.post(
      `/agents/${agentId}/evaluate`,
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
