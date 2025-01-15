// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as JobsAPI from './jobs';
import { EvaluationJobMetadata, JobCancelResponse, Jobs, ListEvaluationJobsResponse } from './jobs';

export class Evaluate extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Launch an `Evaluation` job which evaluates an `Agent` on a set of test questions
   * and reference answers.
   *
   * An `Evaluation` is an asynchronous operation. Users can select one or more
   * metrics to assess the quality of generated answers. These metrics include
   * `equivalence` and `groundedness`. `equivalence` evaluates if the Agent response
   * is equivalent to the ground truth (model-driven binary classification).
   * `groundedness` decomposes the Agent response into claims and then evaluates if
   * the claims are grounded by the retrieved documents.
   *
   * `Evaluation` data can be provided in one of two forms:
   *
   * - A CSV `evalset_file` containing the columns `prompt` (i.e. questions) and
   *   `reference` (i.e. gold-answers).
   *
   * - An `evalset_name` which refers to a `Dataset` created through the
   *   `/datasets/evaluate` API.
   */
  create(
    agentId: string,
    body: EvaluateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateEvaluationResponse> {
    return this._client.post(
      `/agents/${agentId}/evaluate`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

/**
 * Response from Launch Evaluation request
 */
export interface CreateEvaluationResponse {
  /**
   * ID of the launched evaluation
   */
  id: string;
}

export interface EvaluateCreateParams {
  /**
   * List of metrics to use. Supported metrics are `equivalence` and `groundedness`.
   */
  metrics: Array<'equivalence' | 'groundedness'>;

  /**
   * Evalset file (CSV) to use for evaluation, containing the columns `prompt` (i.e.
   * question) and `reference` (i.e. ground truth response). Either `evalset_name` or
   * `evalset_file` must be provided, but not both.
   */
  evalset_file?: Core.Uploadable;

  /**
   * Name of the Dataset to use for evaluation, created through the
   * `/datasets/evaluate` API. Either `evalset_name` or `evalset_file` must be
   * provided, but not both.
   */
  evalset_name?: string;

  /**
   * ID of the model to evaluate. Uses the default model if not specified.
   */
  llm_model_id?: string | null;
}

Evaluate.Jobs = Jobs;

export declare namespace Evaluate {
  export {
    type CreateEvaluationResponse as CreateEvaluationResponse,
    type EvaluateCreateParams as EvaluateCreateParams,
  };

  export {
    Jobs as Jobs,
    type EvaluationJobMetadata as EvaluationJobMetadata,
    type ListEvaluationJobsResponse as ListEvaluationJobsResponse,
    type JobCancelResponse as JobCancelResponse,
  };
}
