// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as JobsAPI from './jobs';
import { JobDeleteResponse, Jobs, ListTuneJobsResponse, TuneJobMetadata } from './jobs';
import * as ModelsAPI from './models';
import { ListTuneModelsResponse, Models } from './models';

export class Tune extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);

  /**
   * Create a tuning job for the specified `Agent` to specialize it to your specific
   * domain or use case.
   *
   * This API initiates an asynchronous tuning task using the provided
   * `training_file` and an optional `test_file`. If no `test_file` is provided, the
   * tuning job will hold out a portion of the `training_file` as the test set.
   *
   * Returns a tune job `id` which can be used to check on the status of your tuning
   * task through the `GET /tune/jobs/{job_id}/metadata` endpoint.
   *
   * After the tuning job is complete, the metadata associated with the tune job will
   * include evaluation results and a model ID. You can then deploy the tuned model
   * to the agent by editing its config with the tuned model ID and the "Edit Agent"
   * API (i.e. the `PUT /agents/{agent_id}` API).
   */
  create(
    agentId: string,
    body: TuneCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateTuneResponse> {
    return this._client.post(
      `/agents/${agentId}/tune`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

/**
 * Response to POST /agents/{agent_id}/tune request
 */
export interface CreateTuneResponse {
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
   * `guideline`, `prompt`, `reference`, and `knowledge`.
   *
   * - `knowledge` (`list[str]`): Retrieved knowledge used to generate the reference
   *   answer. `knowledge` is a list of retrieved text chunks.
   *
   * - `reference` (`str`): The gold-standard answer to the prompt.
   *
   * - `guideline` (`str`): Guidelines for model output.
   *
   * - `prompt` (`str`): Question for the model to respond to.
   *
   * Example:
   *
   * ```json
   * [
   *   {
   *     "guideline": "The answer should be accurate.",
   *     "prompt": "What was last quarter's revenue?",
   *     "reference": "According to recent reports, the Q3 revenue was $1.2 million, a 0.1 million increase from Q2.",
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
   * ID of an existing model to tune. Defaults to the agent's default model if not
   * specified.
   */
  model_id?: string;

  /**
   * Optional. Local path to the test data file. The test file should follow the same
   * format as the training data file.
   */
  test_file?: Core.Uploadable;
}

Tune.Jobs = Jobs;
Tune.Models = Models;

export declare namespace Tune {
  export { type CreateTuneResponse as CreateTuneResponse, type TuneCreateParams as TuneCreateParams };

  export {
    Jobs as Jobs,
    type ListTuneJobsResponse as ListTuneJobsResponse,
    type TuneJobMetadata as TuneJobMetadata,
    type JobDeleteResponse as JobDeleteResponse,
  };

  export { Models as Models, type ListTuneModelsResponse as ListTuneModelsResponse };
}
