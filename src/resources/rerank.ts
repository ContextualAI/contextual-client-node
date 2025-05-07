// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Rerank extends APIResource {
  /**
   * Rank a list of documents according to their relevance to a query primarily and
   * your custom instructions secondarily. We evaluated the model on instructions for
   * recency, document type, source, and metadata, and it can generalize to other
   * instructions as well.
   *
   * The total request cannot exceed 400,000 tokens. The combined length of the
   * query, instruction and any document with its metadata must not exceed 8,000
   * tokens.
   *
   * See our
   * [blog post](https://contextual.ai/blog/introducing-instruction-following-reranker/)
   * and
   * [code examples](https://colab.research.google.com/github/ContextualAI/examples/blob/main/03-standalone-api/03-rerank/rerank.ipynb).
   * Email [rerank-feedback@contextual.ai](mailto:rerank-feedback@contextual.ai) with
   * any feedback or questions.
   */
  create(body: RerankCreateParams, options?: Core.RequestOptions): Core.APIPromise<RerankCreateResponse> {
    return this._client.post('/rerank', { body, ...options });
  }
}

/**
 * Rerank output response.
 */
export interface RerankCreateResponse {
  /**
   * The ranked list of documents containing the index of the document and the
   * relevance score, sorted by relevance score.
   */
  results: Array<RerankCreateResponse.Result>;
}

export namespace RerankCreateResponse {
  /**
   * Reranked result object.
   */
  export interface Result {
    /**
     * Index of the document in the input list, starting with 0
     */
    index: number;

    /**
     * Relevance scores assess how likely a document is to have information that is
     * helpful to answer the query. Our model outputs the scores in a wide range, and
     * we normalize scores to a 0-1 scale and truncate the response to 8 decimal
     * places. Our reranker is designed for RAG, so its purpose is to check whether a
     * document has information that is helpful to answer the query. A reranker that is
     * designed for direct Q&A (Question & Answer) would behave differently.
     */
    relevance_score: number;
  }
}

export interface RerankCreateParams {
  /**
   * The texts to be reranked according to their relevance to the query and the
   * optional instruction
   */
  documents: Array<string>;

  /**
   * The version of the reranker to use. Currently, we just have
   * "ctxl-rerank-en-v1-instruct".
   */
  model: string;

  /**
   * The string against which documents will be ranked for relevance
   */
  query: string;

  /**
   * Instructions that the reranker references when ranking documents, after
   * considering relevance. We evaluated the model on instructions for recency,
   * document type, source, and metadata, and it can generalize to other instructions
   * as well. For instructions related to recency and timeframe, specify the
   * timeframe (e.g., instead of saying "this year") because the reranker doesn't
   * know the current date. Example: "Prioritize internal sales documents over market
   * analysis reports. More recent documents should be weighted higher. Enterprise
   * portal content supersedes distributor communications."
   */
  instruction?: string;

  /**
   * Metadata for documents being passed to the reranker. Must be the same length as
   * the documents list. If a document does not have metadata, add an empty string.
   */
  metadata?: Array<string>;

  /**
   * The number of top-ranked results to return
   */
  top_n?: number;
}

export declare namespace Rerank {
  export { type RerankCreateResponse as RerankCreateResponse, type RerankCreateParams as RerankCreateParams };
}
