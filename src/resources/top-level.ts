// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * LMUnit result object.
 */
export interface LMUnitResponse {
  /**
   * The response is scored on a continuous scale from 1 to 5 on the unit test. The
   * discrete scores 1, 2, 3, 4, and 5 roughly correspond to "Strongly fails,"
   * "Fails," "Neutral," "Passes," and "Strongly passes," respectively.
   */
  score: number;
}

export interface LMUnitParams {
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

export declare namespace TopLevel {
  export { type LMUnitResponse as LMUnitResponse, type LMUnitParams as LMUnitParams };
}
