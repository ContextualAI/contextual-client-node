// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MetadataAPI from './metadata';
import { AgentMetadataResponse, Metadata } from './metadata';
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
import { CreateDatasetResponse, DatasetResponse, Datasets, ListDatasetsResponse } from './datasets/datasets';
import * as EvaluateAPI from './evaluate/evaluate';
import { Evaluate, EvaluateLaunchParams, LaunchEvaluationResponse } from './evaluate/evaluate';
import * as TuneAPI from './tune/tune';
import { Tune, TuneCreateParams, TuneResponse } from './tune/tune';
import { Page, type PageParams } from '../../pagination';

export class Agents extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  evaluate: EvaluateAPI.Evaluate = new EvaluateAPI.Evaluate(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  tune: TuneAPI.Tune = new TuneAPI.Tune(this._client);

  /**
   * Create a new `Agent` with a specific configuration.
   *
   * This creates a specialized RAG `Agent` which queries over a `Datastore` to
   * retrieve relevant data on which its generations are grounded.
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
  data?: Array<Agent>;

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
   * The IDs of the datastore associated with the agent. Leave empty to automatically
   * create a new datastore.
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
   * handle.
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
   * IDs of the datastore to associate with the agent.
   */
  datastore_ids?: Array<string>;

  /**
   * Optional model ID of a tuned model to use for generation. Model must have been
   * tuned on this agent; tuned models cannot be used across agents. Uses default
   * model if none is specified. Set to `default` to deactivate the tuned model and
   * use the default model.
   */
  llm_model_id?: string;

  /**
   * These queries will show up as suggestions in the Contextual UI when users load
   * the agent. We recommend including common queries that users will ask, as well as
   * complex queries so users understand the types of complex queries the system can
   * handle.
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
Agents.Metadata = Metadata;
Agents.Query = Query;
Agents.Evaluate = Evaluate;
Agents.Datasets = Datasets;
Agents.Tune = Tune;

export declare namespace Agents {
  export {
    type Agent as Agent,
    type CreateAgentOutput as CreateAgentOutput,
    type ListAgentsResponse as ListAgentsResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    AgentsPage as AgentsPage,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
  };

  export { Metadata as Metadata, type AgentMetadataResponse as AgentMetadataResponse };

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
    type LaunchEvaluationResponse as LaunchEvaluationResponse,
    type EvaluateLaunchParams as EvaluateLaunchParams,
  };

  export {
    Datasets as Datasets,
    type CreateDatasetResponse as CreateDatasetResponse,
    type DatasetResponse as DatasetResponse,
    type ListDatasetsResponse as ListDatasetsResponse,
  };

  export { Tune as Tune, type TuneResponse as TuneResponse, type TuneCreateParams as TuneCreateParams };
}
