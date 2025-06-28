// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  type DatastoresPageParams,
  DatastoresPageResponse,
  type DocumentsPageParams,
  DocumentsPageResponse,
  type PageParams,
  PageResponse,
  type UsersPageParams,
  UsersPageResponse,
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Generate, GenerateCreateParams, GenerateCreateResponse } from './resources/generate';
import { LMUnit, LMUnitCreateParams, LMUnitCreateResponse } from './resources/lmunit';
import {
  Parse,
  ParseCreateParams,
  ParseCreateResponse,
  ParseJobResultsParams,
  ParseJobResultsResponse,
  ParseJobStatusResponse,
  ParseJobsParams,
  ParseJobsResponse,
} from './resources/parse';
import { Rerank, RerankCreateParams, RerankCreateResponse } from './resources/rerank';
import {
  InviteUsersResponse,
  ListUsersResponse,
  ListUsersResponseUsersUsersPage,
  NewUser,
  UserDeactivateParams,
  UserDeactivateResponse,
  UserInviteParams,
  UserListParams,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './resources/users';
import {
  Agent as AgentsAPIAgent,
  AgentConfigs,
  AgentCreateParams,
  AgentDeleteResponse,
  AgentListParams,
  AgentMetadata,
  AgentMetadataResponse,
  AgentResetResponse,
  AgentUpdateParams,
  AgentUpdateResponse,
  Agents,
  AgentsPage,
  CreateAgentOutput,
  FilterAndRerankConfig,
  GenerateResponseConfig,
  GlobalConfig,
  ListAgentsResponse,
  RetrievalConfig,
} from './resources/agents/agents';
import {
  CreateDatastoreResponse,
  Datastore,
  DatastoreCreateParams,
  DatastoreDeleteResponse,
  DatastoreListParams,
  DatastoreMetadata,
  DatastoreResetResponse,
  Datastores,
  DatastoresDatastoresPage,
  ListDatastoresResponse,
} from './resources/datastores/datastores';

export interface ClientOptions {
  /**
   * API key to access Contextual AI platform
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CONTEXTUAL_AI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Contextual AI API.
 */
export class ContextualAI extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Contextual AI API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['CONTEXTUAL_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['CONTEXTUAL_AI_BASE_URL'] ?? https://api.contextual.ai/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('CONTEXTUAL_AI_BASE_URL'),
    apiKey = Core.readEnv('CONTEXTUAL_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.ContextualAIError(
        "The CONTEXTUAL_API_KEY environment variable is missing or empty; either provide it, or instantiate the ContextualAI client with an apiKey option, like new ContextualAI({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.contextual.ai/v1`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'https://api.contextual.ai/v1' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  datastores: API.Datastores = new API.Datastores(this);
  agents: API.Agents = new API.Agents(this);
  users: API.Users = new API.Users(this);
  lmUnit: API.LMUnit = new API.LMUnit(this);
  rerank: API.Rerank = new API.Rerank(this);
  generate: API.Generate = new API.Generate(this);
  parse: API.Parse = new API.Parse(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.contextual.ai/v1';
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'repeat' });
  }

  static ContextualAI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static ContextualAIError = Errors.ContextualAIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

ContextualAI.Datastores = Datastores;
ContextualAI.DatastoresDatastoresPage = DatastoresDatastoresPage;
ContextualAI.Agents = Agents;
ContextualAI.AgentsPage = AgentsPage;
ContextualAI.Users = Users;
ContextualAI.ListUsersResponseUsersUsersPage = ListUsersResponseUsersUsersPage;
ContextualAI.LMUnit = LMUnit;
ContextualAI.Rerank = Rerank;
ContextualAI.Generate = Generate;
ContextualAI.Parse = Parse;
export declare namespace ContextualAI {
  export type RequestOptions = Core.RequestOptions;

  export import DatastoresPage = Pagination.DatastoresPage;
  export {
    type DatastoresPageParams as DatastoresPageParams,
    type DatastoresPageResponse as DatastoresPageResponse,
  };

  export import DocumentsPage = Pagination.DocumentsPage;
  export {
    type DocumentsPageParams as DocumentsPageParams,
    type DocumentsPageResponse as DocumentsPageResponse,
  };

  export import UsersPage = Pagination.UsersPage;
  export { type UsersPageParams as UsersPageParams, type UsersPageResponse as UsersPageResponse };

  export import Page = Pagination.Page;
  export { type PageParams as PageParams, type PageResponse as PageResponse };

  export {
    Datastores as Datastores,
    type CreateDatastoreResponse as CreateDatastoreResponse,
    type Datastore as Datastore,
    type DatastoreMetadata as DatastoreMetadata,
    type ListDatastoresResponse as ListDatastoresResponse,
    type DatastoreDeleteResponse as DatastoreDeleteResponse,
    type DatastoreResetResponse as DatastoreResetResponse,
    DatastoresDatastoresPage as DatastoresDatastoresPage,
    type DatastoreCreateParams as DatastoreCreateParams,
    type DatastoreListParams as DatastoreListParams,
  };

  export {
    Agents as Agents,
    type AgentsAPIAgent as Agent,
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
    Users as Users,
    type InviteUsersResponse as InviteUsersResponse,
    type ListUsersResponse as ListUsersResponse,
    type NewUser as NewUser,
    type UserUpdateResponse as UserUpdateResponse,
    type UserDeactivateResponse as UserDeactivateResponse,
    ListUsersResponseUsersUsersPage as ListUsersResponseUsersUsersPage,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeactivateParams as UserDeactivateParams,
    type UserInviteParams as UserInviteParams,
  };

  export {
    LMUnit as LMUnit,
    type LMUnitCreateResponse as LMUnitCreateResponse,
    type LMUnitCreateParams as LMUnitCreateParams,
  };

  export {
    Rerank as Rerank,
    type RerankCreateResponse as RerankCreateResponse,
    type RerankCreateParams as RerankCreateParams,
  };

  export {
    Generate as Generate,
    type GenerateCreateResponse as GenerateCreateResponse,
    type GenerateCreateParams as GenerateCreateParams,
  };

  export {
    Parse as Parse,
    type ParseCreateResponse as ParseCreateResponse,
    type ParseJobResultsResponse as ParseJobResultsResponse,
    type ParseJobStatusResponse as ParseJobStatusResponse,
    type ParseJobsResponse as ParseJobsResponse,
    type ParseCreateParams as ParseCreateParams,
    type ParseJobResultsParams as ParseJobResultsParams,
    type ParseJobsParams as ParseJobsParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  ContextualAIError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default ContextualAI;
