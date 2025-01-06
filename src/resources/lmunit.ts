// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Lmunit extends APIResource {
  /**
   * Given a `query`, `response`, and a `unit_test`, return the response's `score` on
   * the unit test on a 5-point continuous scale. The total input cannot exceed 7000
   * tokens.
   *
   * See a code example in [our blog post](https://contextual.ai/news/lmunit/). Email
   * [lmunit-feedback@contextual.ai](mailto:lmunit-feedback@contextual.ai) with any
   * feedback or questions.
   *
   * > 🚀 Obtain an LMUnit API key by completing
   * > [this form](https://contextual.ai/request-lmunit-api/)
   */
  score(body: LmunitScoreParams, options?: Core.RequestOptions): Core.APIPromise<LmunitScoreResponse> {
    return this._client.post('/lmunit', { body, ...options });
  }
}

/**
 * LMUnit result object.
 */
export interface LmunitScoreResponse {
  /**
   * The response is scored on a continuous scale from 1 to 5 on the unit test. The
   * discrete scores 1, 2, 3, 4, and 5 roughly correspond to "Strongly fails,"
   * "Fails," "Neutral," "Passes," and "Strongly passes," respectively.
   */
  score: number;
}

export interface LmunitScoreParams {
  /**
   * The prompt to which the model responds
   */
  query: string;

  /**
   * The model response to evaluate
   */
  response: string;

  /**
   * A natural language statement or question against which to evaluate the response
   */
  unit_test: string;
}

export declare namespace Lmunit {
  export { type LmunitScoreResponse as LmunitScoreResponse, type LmunitScoreParams as LmunitScoreParams };
}
