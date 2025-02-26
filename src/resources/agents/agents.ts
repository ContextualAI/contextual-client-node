// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as QueryAPI from './query';
import {
  Query,
  QueryCreateParams,
  QueryFeedbackParams,
  QueryFeedbackResponse,
  QueryMetricsParams,
  QueryMetricsResponse,
  QueryResponse,
  QueryRetrievalInfoParams,
  RetrievalInfoResponse,
} from './query';
import * as DatasetsAPI from './datasets/datasets';
import { CreateDatasetResponse, DatasetMetadata, Datasets, ListDatasetsResponse } from './datasets/datasets';
import * as EvaluateAPI from './evaluate/evaluate';
import { CreateEvaluationResponse, Evaluate, EvaluateCreateParams } from './evaluate/evaluate';
import * as TuneAPI from './tune/tune';
import { CreateTuneResponse, Tune, TuneCreateParams } from './tune/tune';
import { Page, type PageParams } from '../../pagination';

export class Agents extends APIResource {
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  evaluate: EvaluateAPI.Evaluate = new EvaluateAPI.Evaluate(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  tune: TuneAPI.Tune = new TuneAPI.Tune(this._client);

  /**
   * Create a new `Agent` with a specific configuration.
   *
   * This creates a specialized RAG `Agent` which queries over one or multiple
   * `Datastores` to retrieve relevant data on which its generations are grounded.
   *
   * Retrieval and generation parameters are defined in the provided `Agent`
   * configuration.
   *
   * If no `datastore_id` is provided in the configuration, this API automatically
   * creates an empty `Datastore` and configures the `Agent` to use the newly created
   * `Datastore`.
   */
  create(body: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateAgentOutput> {
    return this._client.post('/agents', { body, ...options });
  }

  /**
   * Modify a given `Agent` to utilize the provided configuration.
   *
   * Fields not included in the request body will not be modified.
   */
  update(agentId: string, body: AgentUpdateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.put(`/agents/${agentId}`, { body, ...options });
  }

  /**
   * Retrieve a list of all `Agents`.
   */
  list(query?: AgentListParams, options?: Core.RequestOptions): Core.PagePromise<AgentsPage, Agent>;
  list(options?: Core.RequestOptions): Core.PagePromise<AgentsPage, Agent>;
  list(
    query: AgentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AgentsPage, Agent> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/agents', AgentsPage, { query, ...options });
  }

  /**
   * Delete a given `Agent`. This is an irreversible operation.
   *
   * Note: `Datastores` which are associated with the `Agent` will not be deleted,
   * even if no other `Agent` is using them. To delete a `Datastore`, use the
   * `DELETE /datastores/{datastore_id}` API.
   */
  delete(agentId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/agents/${agentId}`, options);
  }

  /**
   * Get metadata and configuration of a given `Agent`.
   */
  metadata(agentId: string, options?: Core.RequestOptions): Core.APIPromise<AgentMetadata> {
    return this._client.get(`/agents/${agentId}/metadata`, options);
  }
}

export class AgentsPage extends Page<Agent> {}

export interface Agent {
  /**
   * ID of the agent
   */
  id: string;

  /**
   * Description of the agent
   */
  description: string;

  /**
   * Name of the agent
   */
  name: string;
}

/**
 * Response to GET Agent request
 */
export interface AgentMetadata {
  /**
   * The IDs of the datastore(s) associated with the agent
   */
  datastore_ids: Array<string>;

  /**
   * Name of the agent
   */
  name: string;

  /**
   * The following advanced parameters are experimental and subject to change.
   */
  agent_configs?: AgentMetadata.AgentConfigs;

  /**
   * Description of the agent
   */
  description?: string;

  /**
   * The model ID to use for generation. Tuned models can only be used for the agents
   * on which they were tuned. If no model is specified, the default model is used.
   * Set to `default` to switch from a tuned model to the default model.
   */
  llm_model_id?: string;

  /**
   * These queries will show up as suggestions in the Contextual UI when users load
   * the agent. We recommend including common queries that users will ask, as well as
   * complex queries so users understand the types of complex queries the system can
   * handle. The max length of all the suggested queries is 1000.
   */
  suggested_queries?: Array<string>;

  /**
   * Instructions that your agent references when generating responses. Note that we
   * do not guarantee that the system will follow these instructions exactly.
   */
  system_prompt?: string;
}

export namespace AgentMetadata {
  /**
   * The following advanced parameters are experimental and subject to change.
   */
  export interface AgentConfigs {
    /**
     * Parameters that affect filtering and reranking of retrieved knowledge
     */
    filter_and_rerank_config?: AgentConfigs.FilterAndRerankConfig;

    /**
     * Parameters that affect response generation
     */
    generate_response_config?: AgentConfigs.GenerateResponseConfig;

    /**
     * Parameters that affect the agent's overall RAG workflow
     */
    global_config?: AgentConfigs.GlobalConfig;

    /**
     * Parameters that affect how the agent retrieves from datastore(s)
     */
    retrieval_config?: AgentConfigs.RetrievalConfig;
  }

  export namespace AgentConfigs {
    /**
     * Parameters that affect filtering and reranking of retrieved knowledge
     */
    export interface FilterAndRerankConfig {
      /**
       * The number of highest ranked chunks after reranking to be used
       */
      top_k_reranked_chunks?: number;
    }

    /**
     * Parameters that affect response generation
     */
    export interface GenerateResponseConfig {
      /**
       * This parameter adjusts how the model treats repeated tokens during text
       * generation.
       */
      frequency_penalty?: number;

      /**
       * The maximum number of tokens the model can generate in a response.
       */
      max_new_tokens?: number;

      /**
       * This parameter controls the randomness of how the model selects the next tokens
       * during text generation.
       */
      seed?: number;

      /**
       * The sampling temperature, which affects the randomness in the response.
       */
      temperature?: number;

      /**
       * A parameter for nucleus sampling, an alternative to `temperature` which also
       * affects the randomness of the response.
       */
      top_p?: number;
    }

    /**
     * Parameters that affect the agent's overall RAG workflow
     */
    export interface GlobalConfig {
      /**
       * Enables filtering of retrieved chunks with a separate LLM
       */
      enable_filter?: boolean;

      /**
       * Enables multi-turn conversations. This feature is currently experimental and
       * will be improved.
       */
      enable_multi_turn?: boolean;

      /**
       * Enables reranking of retrieved chunks
       */
      enable_rerank?: boolean;
    }

    /**
     * Parameters that affect how the agent retrieves from datastore(s)
     */
    export interface RetrievalConfig {
      /**
       * The weight of lexical search during retrieval
       */
      lexical_alpha?: number;

      /**
       * The weight of semantic search during retrieval
       */
      semantic_alpha?: number;

      /**
       * The maximum number of retrieved chunks from the datastore.
       */
      top_k_retrieved_chunks?: number;
    }
  }
}

/**
 * Response to POST /agents request
 */
export interface CreateAgentOutput {
  /**
   * ID of the agent
   */
  id: string;

  /**
   * IDs of the datastores associated with the agent. If no datastore was provided as
   * part of the request, this is a singleton list containing the ID of the
   * automatically created datastore.
   */
  datastore_ids: Array<string>;
}

export interface ListAgentsResponse {
  /**
   * Total number of available agents
   */
  total_count: number;

  /**
   * List of active agents
   */
  agents?: Array<Agent>;

  /**
   * Next cursor to continue pagination. Omitted if there are no more agents to
   * retrieve.
   */
  next_cursor?: string;
}

export type AgentUpdateResponse = unknown;

export type AgentDeleteResponse = unknown;

export interface AgentCreateParams {
  /**
   * Name of the agent
   */
  name: string;

  /**
   * The following advanced parameters are experimental and subject to change.
   */
  agent_configs?: AgentCreateParams.AgentConfigs;

  /**
   * The IDs of the datastore to associate with this agent.
   */
  datastore_ids?: Array<string>;

  /**
   * Description of the agent
   */
  description?: string;

  /**
   * These queries will show up as suggestions in the Contextual UI when users load
   * the agent. We recommend including common queries that users will ask, as well as
   * complex queries so users understand the types of complex queries the system can
   * handle. The max length of all the suggested queries is 1000.
   */
  suggested_queries?: Array<string>;

  /**
   * Instructions that your agent references when generating responses. Note that we
   * do not guarantee that the system will follow these instructions exactly.
   */
  system_prompt?: string;
}

export namespace AgentCreateParams {
  /**
   * The following advanced parameters are experimental and subject to change.
   */
  export interface AgentConfigs {
    /**
     * Parameters that affect filtering and reranking of retrieved knowledge
     */
    filter_and_rerank_config?: AgentConfigs.FilterAndRerankConfig;

    /**
     * Parameters that affect response generation
     */
    generate_response_config?: AgentConfigs.GenerateResponseConfig;

    /**
     * Parameters that affect the agent's overall RAG workflow
     */
    global_config?: AgentConfigs.GlobalConfig;

    /**
     * Parameters that affect how the agent retrieves from datastore(s)
     */
    retrieval_config?: AgentConfigs.RetrievalConfig;
  }

  export namespace AgentConfigs {
    /**
     * Parameters that affect filtering and reranking of retrieved knowledge
     */
    export interface FilterAndRerankConfig {
      /**
       * The number of highest ranked chunks after reranking to be used
       */
      top_k_reranked_chunks?: number;
    }

    /**
     * Parameters that affect response generation
     */
    export interface GenerateResponseConfig {
      /**
       * This parameter adjusts how the model treats repeated tokens during text
       * generation.
       */
      frequency_penalty?: number;

      /**
       * The maximum number of tokens the model can generate in a response.
       */
      max_new_tokens?: number;

      /**
       * This parameter controls the randomness of how the model selects the next tokens
       * during text generation.
       */
      seed?: number;

      /**
       * The sampling temperature, which affects the randomness in the response.
       */
      temperature?: number;

      /**
       * A parameter for nucleus sampling, an alternative to `temperature` which also
       * affects the randomness of the response.
       */
      top_p?: number;
    }

    /**
     * Parameters that affect the agent's overall RAG workflow
     */
    export interface GlobalConfig {
      /**
       * Enables filtering of retrieved chunks with a separate LLM
       */
      enable_filter?: boolean;

      /**
       * Enables multi-turn conversations. This feature is currently experimental and
       * will be improved.
       */
      enable_multi_turn?: boolean;

      /**
       * Enables reranking of retrieved chunks
       */
      enable_rerank?: boolean;
    }

    /**
     * Parameters that affect how the agent retrieves from datastore(s)
     */
    export interface RetrievalConfig {
      /**
       * The weight of lexical search during retrieval
       */
      lexical_alpha?: number;

      /**
       * The weight of semantic search during retrieval
       */
      semantic_alpha?: number;

      /**
       * The maximum number of retrieved chunks from the datastore.
       */
      top_k_retrieved_chunks?: number;
    }
  }
}

export interface AgentUpdateParams {
  /**
   * The following advanced parameters are experimental and subject to change.
   */
  agent_configs?: AgentUpdateParams.AgentConfigs;

  /**
   * IDs of the datastore to associate with the agent.
   */
  datastore_ids?: Array<string>;

  /**
   * The model ID to use for generation. Tuned models can only be used for the agents
   * on which they were tuned. If no model is specified, the default model is used.
   * Set to `default` to switch from a tuned model to the default model.
   */
  llm_model_id?: string;

  /**
   * These queries will show up as suggestions in the Contextual UI when users load
   * the agent. We recommend including common queries that users will ask, as well as
   * complex queries so users understand the types of complex queries the system can
   * handle. The max length of all the suggested queries is 1000.
   */
  suggested_queries?: Array<string>;

  /**
   * Instructions that your agent references when generating responses. Note that we
   * do not guarantee that the system will follow these instructions exactly.
   */
  system_prompt?: string;
}

export namespace AgentUpdateParams {
  /**
   * The following advanced parameters are experimental and subject to change.
   */
  export interface AgentConfigs {
    /**
     * Parameters that affect filtering and reranking of retrieved knowledge
     */
    filter_and_rerank_config?: AgentConfigs.FilterAndRerankConfig;

    /**
     * Parameters that affect response generation
     */
    generate_response_config?: AgentConfigs.GenerateResponseConfig;

    /**
     * Parameters that affect the agent's overall RAG workflow
     */
    global_config?: AgentConfigs.GlobalConfig;

    /**
     * Parameters that affect how the agent retrieves from datastore(s)
     */
    retrieval_config?: AgentConfigs.RetrievalConfig;
  }

  export namespace AgentConfigs {
    /**
     * Parameters that affect filtering and reranking of retrieved knowledge
     */
    export interface FilterAndRerankConfig {
      /**
       * The number of highest ranked chunks after reranking to be used
       */
      top_k_reranked_chunks?: number;
    }

    /**
     * Parameters that affect response generation
     */
    export interface GenerateResponseConfig {
      /**
       * This parameter adjusts how the model treats repeated tokens during text
       * generation.
       */
      frequency_penalty?: number;

      /**
       * The maximum number of tokens the model can generate in a response.
       */
      max_new_tokens?: number;

      /**
       * This parameter controls the randomness of how the model selects the next tokens
       * during text generation.
       */
      seed?: number;

      /**
       * The sampling temperature, which affects the randomness in the response.
       */
      temperature?: number;

      /**
       * A parameter for nucleus sampling, an alternative to `temperature` which also
       * affects the randomness of the response.
       */
      top_p?: number;
    }

    /**
     * Parameters that affect the agent's overall RAG workflow
     */
    export interface GlobalConfig {
      /**
       * Enables filtering of retrieved chunks with a separate LLM
       */
      enable_filter?: boolean;

      /**
       * Enables multi-turn conversations. This feature is currently experimental and
       * will be improved.
       */
      enable_multi_turn?: boolean;

      /**
       * Enables reranking of retrieved chunks
       */
      enable_rerank?: boolean;
    }

    /**
     * Parameters that affect how the agent retrieves from datastore(s)
     */
    export interface RetrievalConfig {
      /**
       * The weight of lexical search during retrieval
       */
      lexical_alpha?: number;

      /**
       * The weight of semantic search during retrieval
       */
      semantic_alpha?: number;

      /**
       * The maximum number of retrieved chunks from the datastore.
       */
      top_k_retrieved_chunks?: number;
    }
  }
}

export interface AgentListParams extends PageParams {}

Agents.AgentsPage = AgentsPage;
Agents.Query = Query;
Agents.Evaluate = Evaluate;
Agents.Datasets = Datasets;
Agents.Tune = Tune;

export declare namespace Agents {
  export {
    type Agent as Agent,
    type AgentMetadata as AgentMetadata,
    type CreateAgentOutput as CreateAgentOutput,
    type ListAgentsResponse as ListAgentsResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    AgentsPage as AgentsPage,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
  };

  export {
    Query as Query,
    type QueryResponse as QueryResponse,
    type RetrievalInfoResponse as RetrievalInfoResponse,
    type QueryFeedbackResponse as QueryFeedbackResponse,
    type QueryMetricsResponse as QueryMetricsResponse,
    type QueryCreateParams as QueryCreateParams,
    type QueryFeedbackParams as QueryFeedbackParams,
    type QueryMetricsParams as QueryMetricsParams,
    type QueryRetrievalInfoParams as QueryRetrievalInfoParams,
  };

  export {
    Evaluate as Evaluate,
    type CreateEvaluationResponse as CreateEvaluationResponse,
    type EvaluateCreateParams as EvaluateCreateParams,
  };

  export {
    Datasets as Datasets,
    type CreateDatasetResponse as CreateDatasetResponse,
    type DatasetMetadata as DatasetMetadata,
    type ListDatasetsResponse as ListDatasetsResponse,
  };

  export {
    Tune as Tune,
    type CreateTuneResponse as CreateTuneResponse,
    type TuneCreateParams as TuneCreateParams,
  };
}
