// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  type ApplicationsPageParams,
  ApplicationsPageResponse,
  type DatastoresPageParams,
  DatastoresPageResponse,
  type DocumentsPageParams,
  DocumentsPageResponse,
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import { LMUnitParams, LMUnitResponse } from './resources/top-level';
import {
  Application,
  ApplicationCreateParams,
  ApplicationDeleteResponse,
  ApplicationListParams,
  ApplicationUpdateParams,
  ApplicationUpdateResponse,
  Applications,
  ApplicationsApplicationsPage,
  ApplicationsResponse,
  CreateApplicationOutput,
} from './resources/applications/applications';
import {
  CreateDatastoreResponse,
  Datastore,
  DatastoreCreateParams,
  DatastoreDeleteResponse,
  DatastoreListParams,
  Datastores,
  DatastoresDatastoresPage,
  DatastoresResponse,
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
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
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
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  datastores: API.Datastores = new API.Datastores(this);
  applications: API.Applications = new API.Applications(this);

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
  lmUnit(
    body: TopLevelAPI.LMUnitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.LMUnitResponse> {
    return this.post('/lmunit', { body, ...options });
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
    return qs.stringify(query, { arrayFormat: 'comma' });
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
ContextualAI.Applications = Applications;
ContextualAI.ApplicationsApplicationsPage = ApplicationsApplicationsPage;
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

  export import ApplicationsPage = Pagination.ApplicationsPage;
  export {
    type ApplicationsPageParams as ApplicationsPageParams,
    type ApplicationsPageResponse as ApplicationsPageResponse,
  };

  export { type LMUnitResponse as LMUnitResponse, type LMUnitParams as LMUnitParams };

  export {
    Datastores as Datastores,
    type CreateDatastoreResponse as CreateDatastoreResponse,
    type Datastore as Datastore,
    type DatastoresResponse as DatastoresResponse,
    type DatastoreDeleteResponse as DatastoreDeleteResponse,
    DatastoresDatastoresPage as DatastoresDatastoresPage,
    type DatastoreCreateParams as DatastoreCreateParams,
    type DatastoreListParams as DatastoreListParams,
  };

  export {
    Applications as Applications,
    type Application as Application,
    type ApplicationsResponse as ApplicationsResponse,
    type CreateApplicationOutput as CreateApplicationOutput,
    type ApplicationUpdateResponse as ApplicationUpdateResponse,
    type ApplicationDeleteResponse as ApplicationDeleteResponse,
    ApplicationsApplicationsPage as ApplicationsApplicationsPage,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
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
