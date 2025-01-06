// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MetadataAPI from './metadata';
import { GetApplicationResponse, Metadata } from './metadata';
import * as QueryAPI from './query';
import {
  Query,
  QueryFeedbackParams,
  QueryFeedbackResponse,
  QueryStartParams,
  QueryStartResponse,
} from './query';
import * as DatasetsAPI from './datasets/datasets';
import {
  CreateDatasetResponse,
  DatasetCreateParams,
  DatasetDeleteResponse,
  DatasetListParams,
  DatasetRetrieveParams,
  DatasetRetrieveResponse,
  DatasetUpdateParams,
  Datasets,
  GetDatasetResponse,
  ListDatasetResponse,
} from './datasets/datasets';
import * as EvaluateAPI from './evaluate/evaluate';
import { Evaluate, EvaluateLaunchParams, LaunchEvaluationResponse } from './evaluate/evaluate';
import * as TuneAPI from './tune/tune';
import { Tune, TuneCreateParams, TuneResponse } from './tune/tune';

export class Applications extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  query: QueryAPI.Query = new QueryAPI.Query(this._client);
  evaluate: EvaluateAPI.Evaluate = new EvaluateAPI.Evaluate(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  tune: TuneAPI.Tune = new TuneAPI.Tune(this._client);

  /**
   * Create a new `Application` with a specific configuration.
   *
   * An `Application` queries over a `Datastore` to retrieve relevant data on which
   * generations are grounded.
   *
   * Retrieval and generation parameters are defined in the provided `Application`
   * configuration.
   *
   * If no `datastore_id` is provided in the configuration, this API automatically
   * creates a datastore and configures the application to use the newly created
   * datastore.
   */
  create(
    body: ApplicationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateApplicationOutput> {
    return this._client.post('/applications', { body, ...options });
  }

  /**
   * Modify a given `Application` to utilize the provided configuration.
   *
   * Fields not included in the request body will not be modified.
   */
  update(
    applicationId: string,
    body: ApplicationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.put(`/applications/${applicationId}`, { body, ...options });
  }

  /**
   * Retrieve a list of all `Applications`.
   */
  list(query?: ApplicationListParams, options?: Core.RequestOptions): Core.APIPromise<ApplicationList>;
  list(options?: Core.RequestOptions): Core.APIPromise<ApplicationList>;
  list(
    query: ApplicationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationList> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/applications', { query, ...options });
  }

  /**
   * Delete a given `Application`. This is an irreversible operation.
   *
   * Note: `Datastores` which are associated with the `Application` will not be
   * deleted, even if no other `Application` is using them. To delete a `Datastore`,
   * use the `DELETE /datastores/{datastore_id}` API.
   */
  delete(applicationId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/applications/${applicationId}`, options);
  }
}

export interface ApplicationList {
  /**
   * Total number of available applications
   */
  total_count: number;

  /**
   * List of active applications
   */
  applications?: Array<ApplicationList.Application>;

  /**
   * Next cursor to continue pagination. Omitted if there are no more applications to
   * retrieve.
   */
  next_cursor?: string;
}

export namespace ApplicationList {
  export interface Application {
    /**
     * ID of the application
     */
    id: string;

    /**
     * Description of the application
     */
    description: string;

    /**
     * Name of the application
     */
    name: string;
  }
}

export interface CreateApplicationOutput {
  /**
   * ID of the application
   */
  application_id: string;

  /**
   * IDs of the datastores associated with the application. If no datastore was
   * provided as part of the request, this is a singleton list containing the ID of
   * the automatically created datastore.
   */
  datastore_ids: Array<string>;
}

export type ApplicationUpdateResponse = unknown;

export type ApplicationDeleteResponse = unknown;

export interface ApplicationCreateParams {
  /**
   * Name of the application
   */
  name: string;

  /**
   * The IDs of the datastore associated with the application. Provide at most one
   * datastore. Leave empty to automatically create a new datastore.
   */
  datastore_ids?: Array<string>;

  /**
   * Description of the application
   */
  description?: string;

  /**
   * These queries will show up as suggestions when users load the app. We recommend
   * including common queries that users will ask, as well as complex queries so
   * users understand the types of complex queries the system can handle.
   */
  suggested_queries?: Array<string>;

  /**
   * Instructions that your RAG system references when generating responses. Note
   * that we do not guarantee that the system will follow these instructions exactly.
   */
  system_prompt?: string;
}

export interface ApplicationUpdateParams {
  /**
   * IDs of the datastore to associate with the application.
   */
  datastore_ids?: Array<string>;

  /**
   * Optional model ID of a tuned model to use for generation. Model must have been
   * tuned on this application; tuned models cannot be used across applications. Uses
   * default model if none is specified. Set to `default` to deactivate the tuned
   * model and use the default model.
   */
  llm_model_id?: string;

  /**
   * These queries will show up as suggestions when users load the app. We recommend
   * including common queries that users will ask, as well as complex queries so
   * users understand the types of complex queries the system can handle.
   */
  suggested_queries?: Array<string>;

  /**
   * Instructions that your RAG system references when generating responses. Note
   * that we do not guarantee that the system will follow these instructions exactly.
   */
  system_prompt?: string;
}

export interface ApplicationListParams {
  /**
   * Cursor from the previous call to list applications, used to retrieve the next
   * set of results
   */
  cursor?: string;

  /**
   * Maximum number of applications to return
   */
  limit?: number;

  /**
   * Search text to filter applications by name
   */
  search?: string;
}

Applications.Metadata = Metadata;
Applications.Query = Query;
Applications.Evaluate = Evaluate;
Applications.Datasets = Datasets;
Applications.Tune = Tune;

export declare namespace Applications {
  export {
    type ApplicationList as ApplicationList,
    type CreateApplicationOutput as CreateApplicationOutput,
    type ApplicationUpdateResponse as ApplicationUpdateResponse,
    type ApplicationDeleteResponse as ApplicationDeleteResponse,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
  };

  export { Metadata as Metadata, type GetApplicationResponse as GetApplicationResponse };

  export {
    Query as Query,
    type QueryFeedbackResponse as QueryFeedbackResponse,
    type QueryStartResponse as QueryStartResponse,
    type QueryFeedbackParams as QueryFeedbackParams,
    type QueryStartParams as QueryStartParams,
  };

  export {
    Evaluate as Evaluate,
    type LaunchEvaluationResponse as LaunchEvaluationResponse,
    type EvaluateLaunchParams as EvaluateLaunchParams,
  };

  export {
    Datasets as Datasets,
    type CreateDatasetResponse as CreateDatasetResponse,
    type GetDatasetResponse as GetDatasetResponse,
    type ListDatasetResponse as ListDatasetResponse,
    type DatasetRetrieveResponse as DatasetRetrieveResponse,
    type DatasetDeleteResponse as DatasetDeleteResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetRetrieveParams as DatasetRetrieveParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
  };

  export { Tune as Tune, type TuneResponse as TuneResponse, type TuneCreateParams as TuneCreateParams };
}
