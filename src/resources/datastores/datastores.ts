// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DocumentsAPI from './documents';
import {
  BaseMetadataFilter,
  CompositeMetadataFilter,
  DocumentDeleteResponse,
  DocumentGetParseResultParams,
  DocumentGetParseResultResponse,
  DocumentIngestParams,
  DocumentListParams,
  DocumentMetadata,
  DocumentMetadataDocumentsPage,
  DocumentSetMetadataParams,
  Documents,
  IngestionResponse,
  ListDocumentsResponse,
} from './documents';
import { DatastoresPage, type DatastoresPageParams } from '../../pagination';

export class Datastores extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

  /**
   * Create a new `Datastore`.
   *
   * A `Datastore` is a collection of documents. Documents can be ingested into and
   * deleted from a `Datastore`.
   *
   * A `Datastore` can be linked to one or more `Agents`, and conversely, an `Agent`
   * can be associated with one or more `Datastores` to ground its responses with
   * relevant data. This flexible many-to-many relationship allows `Agents` to draw
   * from multiple sources of information. This linkage of `Datastore` to `Agent` is
   * done through the `Create Agent` or `Edit Agent` APIs.
   *
   * > Note that self-serve users are currently required to create datastores through
   * > our UI. Otherwise, they will receive the following message: "This endpoint is
   * > disabled as you need to go through checkout. Please use the UI to make this
   * > request."
   */
  create(
    body: DatastoreCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateDatastoreResponse> {
    return this._client.post('/datastores', { body, ...options });
  }

  /**
   * Edit Datastore Configuration
   */
  update(
    datastoreId: string,
    body: DatastoreUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatastoreUpdateResponse> {
    return this._client.put(`/datastores/${datastoreId}`, { body, ...options });
  }

  /**
   * Retrieve a list of `Datastores`.
   *
   * Performs `cursor`-based pagination if the number of `Datastores` exceeds the
   * requested `limit`. The returned `cursor` can be passed to the next
   * `GET /datastores` call to retrieve the next set of `Datastores`.
   */
  list(
    query?: DatastoreListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatastoresDatastoresPage, Datastore>;
  list(options?: Core.RequestOptions): Core.PagePromise<DatastoresDatastoresPage, Datastore>;
  list(
    query: DatastoreListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatastoresDatastoresPage, Datastore> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/datastores', DatastoresDatastoresPage, { query, ...options });
  }

  /**
   * Delete a given `Datastore`, including all the documents ingested into it. This
   * operation is irreversible.
   *
   * This operation will fail with status code 400 if there is an active `Agent`
   * associated with the `Datastore`.
   */
  delete(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/datastores/${datastoreId}`, options);
  }

  /**
   * Get the details of a given `Datastore`, including its name, create time, and the
   * list of `Agents` which are currently configured to use the `Datastore`.
   */
  metadata(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<DatastoreMetadata> {
    return this._client.get(`/datastores/${datastoreId}/metadata`, options);
  }

  /**
   * Reset the give `Datastore`. This operation is irreversible and it deletes all
   * the documents associated with the datastore.
   */
  reset(datastoreId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.put(`/datastores/${datastoreId}/reset`, options);
  }
}

export class DatastoresDatastoresPage extends DatastoresPage<Datastore> {}

export interface CreateDatastoreResponse {
  /**
   * ID of the datastore
   */
  id: string;
}

/**
 * Datastore output entry with additional fields for public API.
 */
export interface Datastore {
  /**
   * ID of the datastore
   */
  id: string;

  /**
   * Timestamp of when the datastore was created, in ISO format
   */
  created_at: string;

  /**
   * Type of the datastore
   */
  datastore_type: 'UNSTRUCTURED';

  /**
   * Name of the datastore
   */
  name: string;

  /**
   * Configuration of the datastore
   */
  configuration?: Datastore.Configuration;
}

export namespace Datastore {
  /**
   * Configuration of the datastore
   */
  export interface Configuration {
    /**
     * Configuration for document chunking
     */
    chunking?: Configuration.Chunking;

    /**
     * Configuration for HTML Extraction
     */
    html_config?: Configuration.HTMLConfig;

    /**
     * Configuration for document parsing
     */
    parsing?: Configuration.Parsing;
  }

  export namespace Configuration {
    /**
     * Configuration for document chunking
     */
    export interface Chunking {
      /**
       * Chunking mode to use. Options are: `hierarchy_depth`, `hierarchy_heading`,
       * `static_length`, `page_level`. `hierarchy_depth` groups chunks of the same
       * hierarchy level or below, additionally merging or splitting based on length
       * constraints. `hierarchy_heading` splits chunks at every heading in the document
       * hierarchy, additionally merging or splitting based on length constraints.
       * `static_length` creates chunks of a fixed length. `page_level` creates chunks
       * that cannot run over page boundaries.
       */
      chunking_mode?: 'hierarchy_depth' | 'hierarchy_heading' | 'static_length' | 'page_level';

      /**
       * Whether to enable section-based contextualization for chunking
       */
      enable_hierarchy_based_contextualization?: boolean;

      /**
       * Target maximum length of text tokens chunks for chunking. Chunk length may
       * exceed this value in some edge cases.
       */
      max_chunk_length_tokens?: number;

      /**
       * Target minimum length of chunks in tokens. Must be at least 384 tokens less than
       * `max_chunk_length_tokens`. Chunk length may be shorter than this value in some
       * edge cases. Ignored if `chunking_mode` is `page_level`.
       */
      min_chunk_length_tokens?: number;
    }

    /**
     * Configuration for HTML Extraction
     */
    export interface HTMLConfig {
      /**
       * Target maximum length of text tokens chunks for chunking. Chunk length may
       * exceed this value in some edge cases.
       */
      max_chunk_length_tokens?: number;
    }

    /**
     * Configuration for document parsing
     */
    export interface Parsing {
      /**
       * Whether to enable table splitting, which splits large tables into smaller tables
       * with at most `max_split_table_cells` cells each. In each split table, the table
       * headers are reproduced as the first row(s). This is useful for preserving
       * context when tables are too large to fit into one chunk.
       */
      enable_split_tables?: boolean;

      /**
       * Mode for figure captioning. Options are `default`, `custom`, or `ignore`. Set to
       * `ignore` to disable figure captioning. Set to `default` to use the default
       * figure prompt, which generates a detailed caption for each figure. Set to
       * `custom` to use a custom prompt.
       */
      figure_caption_mode?: 'default' | 'custom' | 'ignore';

      /**
       * Prompt to use for generating image captions. Must be non-empty if
       * `figure_caption_mode` is `custom`. Otherwise, must be null.
       */
      figure_captioning_prompt?: string;

      /**
       * Maximum number of cells for split tables. Ignored if `enable_split_tables` is
       * False.
       */
      max_split_table_cells?: number;
    }
  }
}

export interface DatastoreMetadata {
  /**
   * List of agents using this datastore
   */
  agent_ids: Array<string>;

  /**
   * Timestamp of when the datastore was created
   */
  created_at: string;

  /**
   * Name of the datastore
   */
  name: string;

  /**
   * Configuration of the datastore. Not set if default configuration is in use.
   */
  configuration?: DatastoreMetadata.Configuration;

  /**
   * Type of the datastore
   */
  datastore_type?: 'UNSTRUCTURED';

  /**
   * Datastore usage
   */
  datastore_usages?: DatastoreMetadata.DatastoreUsages;
}

export namespace DatastoreMetadata {
  /**
   * Configuration of the datastore. Not set if default configuration is in use.
   */
  export interface Configuration {
    /**
     * Configuration for document chunking
     */
    chunking?: Configuration.Chunking;

    /**
     * Configuration for HTML Extraction
     */
    html_config?: Configuration.HTMLConfig;

    /**
     * Configuration for document parsing
     */
    parsing?: Configuration.Parsing;
  }

  export namespace Configuration {
    /**
     * Configuration for document chunking
     */
    export interface Chunking {
      /**
       * Chunking mode to use. Options are: `hierarchy_depth`, `hierarchy_heading`,
       * `static_length`, `page_level`. `hierarchy_depth` groups chunks of the same
       * hierarchy level or below, additionally merging or splitting based on length
       * constraints. `hierarchy_heading` splits chunks at every heading in the document
       * hierarchy, additionally merging or splitting based on length constraints.
       * `static_length` creates chunks of a fixed length. `page_level` creates chunks
       * that cannot run over page boundaries.
       */
      chunking_mode?: 'hierarchy_depth' | 'hierarchy_heading' | 'static_length' | 'page_level';

      /**
       * Whether to enable section-based contextualization for chunking
       */
      enable_hierarchy_based_contextualization?: boolean;

      /**
       * Target maximum length of text tokens chunks for chunking. Chunk length may
       * exceed this value in some edge cases.
       */
      max_chunk_length_tokens?: number;

      /**
       * Target minimum length of chunks in tokens. Must be at least 384 tokens less than
       * `max_chunk_length_tokens`. Chunk length may be shorter than this value in some
       * edge cases. Ignored if `chunking_mode` is `page_level`.
       */
      min_chunk_length_tokens?: number;
    }

    /**
     * Configuration for HTML Extraction
     */
    export interface HTMLConfig {
      /**
       * Target maximum length of text tokens chunks for chunking. Chunk length may
       * exceed this value in some edge cases.
       */
      max_chunk_length_tokens?: number;
    }

    /**
     * Configuration for document parsing
     */
    export interface Parsing {
      /**
       * Whether to enable table splitting, which splits large tables into smaller tables
       * with at most `max_split_table_cells` cells each. In each split table, the table
       * headers are reproduced as the first row(s). This is useful for preserving
       * context when tables are too large to fit into one chunk.
       */
      enable_split_tables?: boolean;

      /**
       * Mode for figure captioning. Options are `default`, `custom`, or `ignore`. Set to
       * `ignore` to disable figure captioning. Set to `default` to use the default
       * figure prompt, which generates a detailed caption for each figure. Set to
       * `custom` to use a custom prompt.
       */
      figure_caption_mode?: 'default' | 'custom' | 'ignore';

      /**
       * Prompt to use for generating image captions. Must be non-empty if
       * `figure_caption_mode` is `custom`. Otherwise, must be null.
       */
      figure_captioning_prompt?: string;

      /**
       * Maximum number of cells for split tables. Ignored if `enable_split_tables` is
       * False.
       */
      max_split_table_cells?: number;
    }
  }

  /**
   * Datastore usage
   */
  export interface DatastoreUsages {
    /**
     * Actual size of the datastore in GB
     */
    size_gb: number;
  }
}

export interface ListDatastoresResponse {
  /**
   * List of all datastores
   */
  datastores: Array<Datastore>;

  /**
   * Total number of available datastores
   */
  total_count: number;

  /**
   * Next cursor to continue pagination. Omitted if there are no more datastores to
   * retrieve.
   */
  next_cursor?: string;
}

export interface DatastoreUpdateResponse {
  /**
   * ID of the datastore
   */
  id: string;
}

export type DatastoreDeleteResponse = unknown;

export type DatastoreResetResponse = unknown;

export interface DatastoreCreateParams {
  /**
   * Name of the datastore
   */
  name: string;

  /**
   * Configuration of the datastore. If not provided, default configuration is used.
   */
  configuration?: DatastoreCreateParams.Configuration;
}

export namespace DatastoreCreateParams {
  /**
   * Configuration of the datastore. If not provided, default configuration is used.
   */
  export interface Configuration {
    /**
     * Configuration for document chunking
     */
    chunking?: Configuration.Chunking;

    /**
     * Configuration for HTML Extraction
     */
    html_config?: Configuration.HTMLConfig;

    /**
     * Configuration for document parsing
     */
    parsing?: Configuration.Parsing;
  }

  export namespace Configuration {
    /**
     * Configuration for document chunking
     */
    export interface Chunking {
      /**
       * Chunking mode to use. Options are: `hierarchy_depth`, `hierarchy_heading`,
       * `static_length`, `page_level`. `hierarchy_depth` groups chunks of the same
       * hierarchy level or below, additionally merging or splitting based on length
       * constraints. `hierarchy_heading` splits chunks at every heading in the document
       * hierarchy, additionally merging or splitting based on length constraints.
       * `static_length` creates chunks of a fixed length. `page_level` creates chunks
       * that cannot run over page boundaries.
       */
      chunking_mode?: 'hierarchy_depth' | 'hierarchy_heading' | 'static_length' | 'page_level';

      /**
       * Whether to enable section-based contextualization for chunking
       */
      enable_hierarchy_based_contextualization?: boolean;

      /**
       * Target maximum length of text tokens chunks for chunking. Chunk length may
       * exceed this value in some edge cases.
       */
      max_chunk_length_tokens?: number;

      /**
       * Target minimum length of chunks in tokens. Must be at least 384 tokens less than
       * `max_chunk_length_tokens`. Chunk length may be shorter than this value in some
       * edge cases. Ignored if `chunking_mode` is `page_level`.
       */
      min_chunk_length_tokens?: number;
    }

    /**
     * Configuration for HTML Extraction
     */
    export interface HTMLConfig {
      /**
       * Target maximum length of text tokens chunks for chunking. Chunk length may
       * exceed this value in some edge cases.
       */
      max_chunk_length_tokens?: number;
    }

    /**
     * Configuration for document parsing
     */
    export interface Parsing {
      /**
       * Whether to enable table splitting, which splits large tables into smaller tables
       * with at most `max_split_table_cells` cells each. In each split table, the table
       * headers are reproduced as the first row(s). This is useful for preserving
       * context when tables are too large to fit into one chunk.
       */
      enable_split_tables?: boolean;

      /**
       * Mode for figure captioning. Options are `default`, `custom`, or `ignore`. Set to
       * `ignore` to disable figure captioning. Set to `default` to use the default
       * figure prompt, which generates a detailed caption for each figure. Set to
       * `custom` to use a custom prompt.
       */
      figure_caption_mode?: 'default' | 'custom' | 'ignore';

      /**
       * Prompt to use for generating image captions. Must be non-empty if
       * `figure_caption_mode` is `custom`. Otherwise, must be null.
       */
      figure_captioning_prompt?: string;

      /**
       * Maximum number of cells for split tables. Ignored if `enable_split_tables` is
       * False.
       */
      max_split_table_cells?: number;
    }
  }
}

export interface DatastoreUpdateParams {
  /**
   * Configuration of the datastore. If not provided, current configuration is
   * retained.
   */
  configuration?: DatastoreUpdateParams.Configuration;

  /**
   * Name of the datastore
   */
  name?: string;
}

export namespace DatastoreUpdateParams {
  /**
   * Configuration of the datastore. If not provided, current configuration is
   * retained.
   */
  export interface Configuration {
    /**
     * Configuration for document chunking
     */
    chunking?: Configuration.Chunking;

    /**
     * Configuration for HTML Extraction
     */
    html_config?: Configuration.HTMLConfig;

    /**
     * Configuration for document parsing
     */
    parsing?: Configuration.Parsing;
  }

  export namespace Configuration {
    /**
     * Configuration for document chunking
     */
    export interface Chunking {
      /**
       * Chunking mode to use. Options are: `hierarchy_depth`, `hierarchy_heading`,
       * `static_length`, `page_level`. `hierarchy_depth` groups chunks of the same
       * hierarchy level or below, additionally merging or splitting based on length
       * constraints. `hierarchy_heading` splits chunks at every heading in the document
       * hierarchy, additionally merging or splitting based on length constraints.
       * `static_length` creates chunks of a fixed length. `page_level` creates chunks
       * that cannot run over page boundaries.
       */
      chunking_mode?: 'hierarchy_depth' | 'hierarchy_heading' | 'static_length' | 'page_level';

      /**
       * Whether to enable section-based contextualization for chunking
       */
      enable_hierarchy_based_contextualization?: boolean;

      /**
       * Target maximum length of text tokens chunks for chunking. Chunk length may
       * exceed this value in some edge cases.
       */
      max_chunk_length_tokens?: number;

      /**
       * Target minimum length of chunks in tokens. Must be at least 384 tokens less than
       * `max_chunk_length_tokens`. Chunk length may be shorter than this value in some
       * edge cases. Ignored if `chunking_mode` is `page_level`.
       */
      min_chunk_length_tokens?: number;
    }

    /**
     * Configuration for HTML Extraction
     */
    export interface HTMLConfig {
      /**
       * Target maximum length of text tokens chunks for chunking. Chunk length may
       * exceed this value in some edge cases.
       */
      max_chunk_length_tokens?: number;
    }

    /**
     * Configuration for document parsing
     */
    export interface Parsing {
      /**
       * Whether to enable table splitting, which splits large tables into smaller tables
       * with at most `max_split_table_cells` cells each. In each split table, the table
       * headers are reproduced as the first row(s). This is useful for preserving
       * context when tables are too large to fit into one chunk.
       */
      enable_split_tables?: boolean;

      /**
       * Mode for figure captioning. Options are `default`, `custom`, or `ignore`. Set to
       * `ignore` to disable figure captioning. Set to `default` to use the default
       * figure prompt, which generates a detailed caption for each figure. Set to
       * `custom` to use a custom prompt.
       */
      figure_caption_mode?: 'default' | 'custom' | 'ignore';

      /**
       * Prompt to use for generating image captions. Must be non-empty if
       * `figure_caption_mode` is `custom`. Otherwise, must be null.
       */
      figure_captioning_prompt?: string;

      /**
       * Maximum number of cells for split tables. Ignored if `enable_split_tables` is
       * False.
       */
      max_split_table_cells?: number;
    }
  }
}

export interface DatastoreListParams extends DatastoresPageParams {
  /**
   * ID of the agent used to filter datastores. If provided, only datastores linked
   * to this agent will be returned.
   */
  agent_id?: string;
}

Datastores.DatastoresDatastoresPage = DatastoresDatastoresPage;
Datastores.Documents = Documents;
Datastores.DocumentMetadataDocumentsPage = DocumentMetadataDocumentsPage;

export declare namespace Datastores {
  export {
    type CreateDatastoreResponse as CreateDatastoreResponse,
    type Datastore as Datastore,
    type DatastoreMetadata as DatastoreMetadata,
    type ListDatastoresResponse as ListDatastoresResponse,
    type DatastoreUpdateResponse as DatastoreUpdateResponse,
    type DatastoreDeleteResponse as DatastoreDeleteResponse,
    type DatastoreResetResponse as DatastoreResetResponse,
    DatastoresDatastoresPage as DatastoresDatastoresPage,
    type DatastoreCreateParams as DatastoreCreateParams,
    type DatastoreUpdateParams as DatastoreUpdateParams,
    type DatastoreListParams as DatastoreListParams,
  };

  export {
    Documents as Documents,
    type BaseMetadataFilter as BaseMetadataFilter,
    type CompositeMetadataFilter as CompositeMetadataFilter,
    type DocumentMetadata as DocumentMetadata,
    type IngestionResponse as IngestionResponse,
    type ListDocumentsResponse as ListDocumentsResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentGetParseResultResponse as DocumentGetParseResultResponse,
    DocumentMetadataDocumentsPage as DocumentMetadataDocumentsPage,
    type DocumentListParams as DocumentListParams,
    type DocumentGetParseResultParams as DocumentGetParseResultParams,
    type DocumentIngestParams as DocumentIngestParams,
    type DocumentSetMetadataParams as DocumentSetMetadataParams,
  };
}
