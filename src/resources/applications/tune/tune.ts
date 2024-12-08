// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ModelsAPI from './models';
import { ModelListResponse, Models } from './models';
import * as JobsAPI from './jobs/jobs';
import { GetTuneJobResponse, JobDeleteResponse, Jobs, ListGetTuneJobResponse } from './jobs/jobs';

export class Tune extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);

  /**
   * Create a tuning job for the specified application. Initiates a tuning
   * specialization task using the provided training file and an optional test file.
   */
  create(
    applicationId: string,
    body: TuneCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TuneResponse> {
    return this._client.post(
      `/applications/${applicationId}/tune`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

/**
 * Response to POST /applications/{application_id}/tune request
 */
export interface TuneResponse {
  /**
   * ID of the created tune job
   */
  id: string;
}

export interface TuneCreateParams {
  /**
   * Local path to the training data file.
   *
   * The file should be in JSON array format, where each element of the array is a
   * JSON object represents a single training example. The four required fields are
   * `guideline`, `prompt`, `response`, and `knowledge`.
   *
   * - `knowledge` field should be an array of strings, each string representing a
   *   piece of knowledge that the model should use to generate the response.
   *
   * - `response` field should be the model's response to the prompt.
   *
   * - `guideline` field should be a description of the expected response.
   *
   * - `prompt` field should be a question or statement that the model should respond
   *   to.
   *
   * Example:
   *
   * ```json
   * [
   *   {
   *     "guideline": "The response should be accurate.",
   *     "prompt": "What was last quarter's revenue?",
   *     "response": "According to recent reports, the Q3 revenue was $1.2 million, a 0.1 million increase from Q2.",
   *     "knowledge": [
   *         "Quarterly report: Q3 revenue was $1.2 million.",
   *         "Quarterly report: Q2 revenue was $1.1 million.",
   *         ...
   *     ],
   *   },
   *   ...
   * ]
   * ```
   */
  training_file: Core.Uploadable;

  /**
   * ID of an existing model to tune. Defaults to the application's default model if
   * not specified.
   */
  model_id?: string;

  /**
   * Optional. Local path to the test data file. The file should follow the same
   * format as the training data file.
   */
  test_file?: Core.Uploadable;
}

Tune.Jobs = Jobs;
Tune.Models = Models;

export declare namespace Tune {
  export { type TuneResponse as TuneResponse, type TuneCreateParams as TuneCreateParams };

  export {
    Jobs as Jobs,
    type GetTuneJobResponse as GetTuneJobResponse,
    type ListGetTuneJobResponse as ListGetTuneJobResponse,
    type JobDeleteResponse as JobDeleteResponse,
  };

  export { Models as Models, type ModelListResponse as ModelListResponse };
}
