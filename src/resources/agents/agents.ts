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
import * as DocumentsAPI from '../datastores/documents';
import { Page, type PageParams } from '../../pagination';

export class Agents extends APIResource {
  query: QueryAPI.Query = new QueryAPI.Query(this._client);

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
   *
   * > Note that self-serve users are currently required to create agents through our
   * > UI. Otherwise, they will receive the following message: "This endpoint is
   * > disabled as you need to go through checkout. Please use the UI to make this
   * > request."
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
   * Copy an existing agent with all its configurations and datastore associations.
   * The copied agent will have "[COPY]" appended to its name.
   */
  copy(agentId: string, options?: Core.RequestOptions): Core.APIPromise<CreateAgentOutput> {
    return this._client.post(`/agents/${agentId}/copy`, options);
  }

  /**
   * Get metadata and configuration of a given `Agent`.
   */
  metadata(agentId: string, options?: Core.RequestOptions): Core.APIPromise<AgentMetadataResponse> {
    return this._client.get(`/agents/${agentId}/metadata`, options);
  }

  /**
   * Reset a given `Agent` to default configuration.
   */
  reset(agentId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.put(`/agents/${agentId}/reset`, options);
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
 * Response to configs for different components
 */
export interface AgentConfigs {
  /**
   * Parameters that affect filtering and reranking of retrieved knowledge
   */
  filter_and_rerank_config?: FilterAndRerankConfig;

  /**
   * Parameters that affect response generation
   */
  generate_response_config?: GenerateResponseConfig;

  /**
   * Parameters that affect the agent's overall RAG workflow
   */
  global_config?: GlobalConfig;

  /**
   * Parameters that affect the agent's query reformulation
   */
  reformulation_config?: AgentConfigs.ReformulationConfig;

  /**
   * Parameters that affect how the agent retrieves from datastore(s)
   */
  retrieval_config?: RetrievalConfig;
}

export namespace AgentConfigs {
  /**
   * Parameters that affect the agent's query reformulation
   */
  export interface ReformulationConfig {
    /**
     * Whether to enable query decomposition.
     */
    enable_query_decomposition?: boolean;

    /**
     * Whether to enable query expansion.
     */
    enable_query_expansion?: boolean;

    /**
     * The prompt to use for query decomposition.
     */
    query_decomposition_prompt?: string;

    /**
     * The prompt to use for query expansion.
     */
    query_expansion_prompt?: string;
  }
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
   * The template used to create this agent.
   */
  template_name: string;

  /**
   * The following advanced parameters are experimental and subject to change.
   */
  agent_configs?: AgentConfigs;

  /**
   * Total API request counts for the agent.
   */
  agent_usages?: AgentMetadata.AgentUsages | null;

  /**
   * Description of the agent
   */
  description?: string;

  /**
   * The prompt to an LLM which determines whether retrieved chunks are relevant to a
   * given query and filters out irrelevant chunks. This prompt is applied per chunk.
   */
  filter_prompt?: string;

  /**
   * The model ID to use for generation. Tuned models can only be used for the agents
   * on which they were tuned. If no model is specified, the default model is used.
   * Set to `default` to switch from a tuned model to the default model.
   */
  llm_model_id?: string;

  /**
   * Instructions on how the agent should handle multi-turn conversations.
   */
  multiturn_system_prompt?: string;

  /**
   * Instructions on how the agent should respond when there are no relevant
   * retrievals that can be used to answer a query.
   */
  no_retrieval_system_prompt?: string;

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
   * Total API request counts for the agent.
   */
  export interface AgentUsages {
    /**
     * eval request count
     */
    eval: number;

    /**
     * query request count
     */
    query: number;

    /**
     * tune request count
     */
    tune: number;
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

/**
 * Captures Filter and Rerank configurations for an Agent
 */
export interface FilterAndRerankConfig {
  /**
   * Optional metadata filter which is applied while retrieving from every datastore
   * linked to this agent.
   */
  default_metadata_filters?: DocumentsAPI.BaseMetadataFilter | DocumentsAPI.CompositeMetadataFilter;

  /**
   * Defines an optional custom metadata filter per datastore ID. Each entry in the
   * dictionary should have a datastore UUID as the key, and the value should be a
   * metadata filter definition. The filter will be applied in addition to filter(s)
   * specified in `default_metadata_filters` and in the `documents_filters` field in
   * the `/query` request during retrieval.
   */
  per_datastore_metadata_filters?: { [key: string]: DocumentsAPI.CompositeMetadataFilter };

  /**
   * Instructions that the reranker references when ranking retrievals. Note that we
   * do not guarantee that the reranker will follow these instructions exactly.
   * Examples: "Prioritize internal sales documents over market analysis reports.
   * More recent documents should be weighted higher. Enterprise portal content
   * supersedes distributor communications." and "Emphasize forecasts from top-tier
   * investment banks. Recent analysis should take precedence. Disregard aggregator
   * sites and favor detailed research notes over news summaries."
   */
  rerank_instructions?: string;

  /**
   * If the reranker relevance score associated with a chunk is below this threshold,
   * then the chunk will be filtered out and not used for generation. Scores are
   * between 0 and 1, with scores closer to 1 being more relevant. Set the value to 0
   * to disable the reranker score filtering.
   */
  reranker_score_filter_threshold?: number;

  /**
   * The number of highest ranked chunks after reranking to be used
   */
  top_k_reranked_chunks?: number;
}

/**
 * Captures advance LLM configurations for an Agent
 */
export interface GenerateResponseConfig {
  /**
   * Flag to indicate whether the model should avoid providing additional commentary
   * in responses. Commentary is conversational in nature and does not contain
   * verifiable claims; therefore, commentary is not strictly grounded in available
   * context. However, commentary may provide useful context which improves the
   * helpfulness of responses.
   */
  avoid_commentary?: boolean;

  /**
   * This parameter controls generation of groundedness scores.
   */
  calculate_groundedness?: boolean;

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
 * Captures global configs
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

  /**
   * Enables checking if retrieval is needed for the query. This feature is currently
   * experimental and will be improved.
   */
  should_check_retrieval_need?: boolean;
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

/**
 * Captures Retrieval configurations for an Agent
 */
export interface RetrievalConfig {
  /**
   * The weight of lexical search during retrieval. Must sum to 1 with
   * semantic_alpha.
   */
  lexical_alpha?: number;

  /**
   * The weight of semantic search during retrieval. Must sum to 1 with
   * lexical_alpha.
   */
  semantic_alpha?: number;

  /**
   * The maximum number of retrieved chunks from the datastore.
   */
  top_k_retrieved_chunks?: number;
}

export type AgentUpdateResponse = unknown;

export type AgentDeleteResponse = unknown;

/**
 * Response to GET Agent request
 */
export type AgentMetadataResponse = AgentMetadata | AgentMetadataResponse.GetTwilightAgentResponse;

export namespace AgentMetadataResponse {
  /**
   * Response to GET Agent request
   */
  export interface GetTwilightAgentResponse {
    /**
     * The IDs of the datastore(s) associated with the agent
     */
    datastore_ids: Array<string>;

    /**
     * Name of the agent
     */
    name: string;

    template_name: string;

    /**
     * The following advanced parameters are experimental and subject to change.
     */
    agent_configs?: unknown;

    /**
     * Total API request counts for the agent.
     */
    agent_usages?: GetTwilightAgentResponse.AgentUsages | null;

    /**
     * Description of the agent
     */
    description?: string;
  }

  export namespace GetTwilightAgentResponse {
    /**
     * Total API request counts for the agent.
     */
    export interface AgentUsages {
      /**
       * eval request count
       */
      eval: number;

      /**
       * query request count
       */
      query: number;

      /**
       * tune request count
       */
      tune: number;
    }
  }
}

export type AgentResetResponse = unknown;

export interface AgentCreateParams {
  /**
   * Name of the agent
   */
  name: string;

  /**
   * The following advanced parameters are experimental and subject to change.
   */
  agent_configs?: AgentConfigs;

  /**
   * The IDs of the datastore to associate with this agent.
   */
  datastore_ids?: Array<string>;

  /**
   * Description of the agent
   */
  description?: string;

  /**
   * The prompt to an LLM which determines whether retrieved chunks are relevant to a
   * given query and filters out irrelevant chunks.
   */
  filter_prompt?: string;

  /**
   * Instructions on how the agent should handle multi-turn conversations.
   */
  multiturn_system_prompt?: string;

  /**
   * Instructions on how the agent should respond when there are no relevant
   * retrievals that can be used to answer a query.
   */
  no_retrieval_system_prompt?: string;

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

export interface AgentUpdateParams {
  /**
   * The following advanced parameters are experimental and subject to change.
   */
  agent_configs?: AgentConfigs;

  /**
   * IDs of the datastore to associate with the agent.
   */
  datastore_ids?: Array<string>;

  /**
   * The prompt to an LLM which determines whether retrieved chunks are relevant to a
   * given query and filters out irrelevant chunks.
   */
  filter_prompt?: string;

  /**
   * The model ID to use for generation. Tuned models can only be used for the agents
   * on which they were tuned. If no model is specified, the default model is used.
   * Set to `default` to switch from a tuned model to the default model.
   */
  llm_model_id?: string;

  /**
   * Instructions on how the agent should handle multi-turn conversations.
   */
  multiturn_system_prompt?: string;

  /**
   * Instructions on how the agent should respond when there are no relevant
   * retrievals that can be used to answer a query.
   */
  no_retrieval_system_prompt?: string;

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

export interface AgentListParams extends PageParams {}

Agents.AgentsPage = AgentsPage;
Agents.Query = Query;

export declare namespace Agents {
  export {
    type Agent as Agent,
    type AgentConfigs as AgentConfigs,
    type AgentMetadata as AgentMetadata,
    type CreateAgentOutput as CreateAgentOutput,
    type FilterAndRerankConfig as FilterAndRerankConfig,
    type GenerateResponseConfig as GenerateResponseConfig,
    type GlobalConfig as GlobalConfig,
    type ListAgentsResponse as ListAgentsResponse,
    type RetrievalConfig as RetrievalConfig,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentMetadataResponse as AgentMetadataResponse,
    type AgentResetResponse as AgentResetResponse,
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
}
