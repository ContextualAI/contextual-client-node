// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Parse extends APIResource {
  /**
   * Parse a file into a structured Markdown and/or JSON. Files must be less than
   * 100MB and 400 pages. We use LibreOffice to convert DOC(X) and PPT(X) files to
   * PDF, which may affect page count.
   *
   * See our [blog post](https://contextual.ai/blog/document-parser-for-rag) and
   * [code examples](https://github.com/ContextualAI/examples/blob/main/03-standalone-api/04-parse/parse.ipynb).
   * Email [parse-feedback@contextual.ai](mailto:parse-feedback@contextual.ai) with
   * any feedback or questions.
   */
  create(body: ParseCreateParams, options?: Core.RequestOptions): Core.APIPromise<ParseCreateResponse> {
    return this._client.post('/parse', Core.multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Get the results of a parse job.
   *
   * Parse job results are retained for up to 30 days after job creation. Fetching
   * results for a parse job that is older than 30 days will return a 404 error.
   */
  jobResults(
    jobId: string,
    query?: ParseJobResultsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ParseJobResultsResponse>;
  jobResults(jobId: string, options?: Core.RequestOptions): Core.APIPromise<ParseJobResultsResponse>;
  jobResults(
    jobId: string,
    query: ParseJobResultsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ParseJobResultsResponse> {
    if (isRequestOptions(query)) {
      return this.jobResults(jobId, {}, query);
    }
    return this._client.get(`/parse/jobs/${jobId}/results`, { query, ...options });
  }

  /**
   * Get the status of a parse job.
   *
   * Parse job results are retained for up to 30 days after job creation. Fetching a
   * status for a parse job that is older than 30 days will return a 404 error.
   */
  jobStatus(jobId: string, options?: Core.RequestOptions): Core.APIPromise<ParseJobStatusResponse> {
    return this._client.get(`/parse/jobs/${jobId}/status`, options);
  }

  /**
   * Get list of parse jobs, sorted from most recent to oldest.
   *
   * Returns all jobs from the last 30 days, or since the optional `uploaded_after`
   * timestamp.
   */
  jobs(query?: ParseJobsParams, options?: Core.RequestOptions): Core.APIPromise<ParseJobsResponse>;
  jobs(options?: Core.RequestOptions): Core.APIPromise<ParseJobsResponse>;
  jobs(
    query: ParseJobsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ParseJobsResponse> {
    if (isRequestOptions(query)) {
      return this.jobs({}, query);
    }
    return this._client.get('/parse/jobs', { query, ...options });
  }
}

/**
 * /parse response object.
 */
export interface ParseCreateResponse {
  /**
   * Unique ID of the parse job
   */
  job_id: string;
}

/**
 * /parse results reponse object.
 */
export interface ParseJobResultsResponse {
  /**
   * The name of the file that was uploaded for parsing
   */
  file_name: string;

  /**
   * The current status of the parse job
   */
  status: 'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled';

  /**
   * Document-level metadata parsed from the document
   */
  document_metadata?: ParseJobResultsResponse.DocumentMetadata;

  /**
   * The parsed, structured Markdown of the input file. Only present if
   * `markdown-document` was among the requested output types.
   */
  markdown_document?: string;

  /**
   * Per-page parse results, containing per-page Markdown (if `markdown-per-page` was
   * requested) and/or per-page `ParsedBlock`s (if `blocks-per-page` was requested).
   */
  pages?: Array<ParseJobResultsResponse.Page>;
}

export namespace ParseJobResultsResponse {
  /**
   * Document-level metadata parsed from the document
   */
  export interface DocumentMetadata {
    /**
     * Hierarchy of the document, as both heading blocks and a markdown table of
     * contents
     */
    hierarchy?: DocumentMetadata.Hierarchy;
  }

  export namespace DocumentMetadata {
    /**
     * Hierarchy of the document, as both heading blocks and a markdown table of
     * contents
     */
    export interface Hierarchy {
      /**
       * Heading blocks which define the hierarchy of the document
       */
      blocks?: Array<Hierarchy.Block>;

      /**
       * Markdown representation of the table of contents for this document
       */
      table_of_contents?: string;
    }

    export namespace Hierarchy {
      /**
       * One logical block of content from a parsed page.
       */
      export interface Block {
        /**
         * Unique ID of the block
         */
        id: string;

        /**
         * The normalized bounding box of the block, as relative percentages of the page
         * width and height
         */
        bounding_box: Block.BoundingBox;

        /**
         * The Markdown representation of the block
         */
        markdown: string;

        /**
         * The type of the block
         */
        type: 'heading' | 'text' | 'table' | 'figure';

        /**
         * The confidence level of this block categorized as 'low', 'medium', or 'high'.
         * Only available for blocks of type 'table' currently.
         */
        confidence_level?: 'low' | 'medium' | 'high';

        /**
         * The level of the block in the document hierarchy, starting at 0 for the
         * root-level title block. Only present if `enable_document_hierarchy` was set to
         * true in the request.
         */
        hierarchy_level?: number;

        /**
         * The page (0-indexed) that this block belongs to. Only set for heading blocks
         * that are returned in the table of contents.
         */
        page_index?: number;

        /**
         * The IDs of the parent in the document hierarchy, sorted from root-level to
         * bottom. For root-level heading blocks, this will be an empty list. Only present
         * if `enable_document_hierarchy` was set to true in the request.
         */
        parent_ids?: Array<string>;
      }

      export namespace Block {
        /**
         * The normalized bounding box of the block, as relative percentages of the page
         * width and height
         */
        export interface BoundingBox {
          /**
           * The x-coordinate of the top-left corner of the bounding box
           */
          x0: number;

          /**
           * The x-coordinate of the bottom-right corner of the bounding box
           */
          x1: number;

          /**
           * The y-coordinate of the top-left corner of the bounding box
           */
          y0: number;

          /**
           * The y-coordinate of the bottom-right corner of the bounding box
           */
          y1: number;
        }
      }
    }
  }

  /**
   * Per-page parse results.
   */
  export interface Page {
    /**
     * The index of the parsed page (zero-indexed)
     */
    index: number;

    /**
     * The parsed, structured blocks of this page. Present if `blocks-per-page` was
     * among the requested output types.
     */
    blocks?: Array<Page.Block>;

    /**
     * The parsed, structured Markdown of this page. Present if `markdown-per-page` was
     * among the requested output types.
     */
    markdown?: string;
  }

  export namespace Page {
    /**
     * One logical block of content from a parsed page.
     */
    export interface Block {
      /**
       * Unique ID of the block
       */
      id: string;

      /**
       * The normalized bounding box of the block, as relative percentages of the page
       * width and height
       */
      bounding_box: Block.BoundingBox;

      /**
       * The Markdown representation of the block
       */
      markdown: string;

      /**
       * The type of the block
       */
      type: 'heading' | 'text' | 'table' | 'figure';

      /**
       * The confidence level of this block categorized as 'low', 'medium', or 'high'.
       * Only available for blocks of type 'table' currently.
       */
      confidence_level?: 'low' | 'medium' | 'high';

      /**
       * The level of the block in the document hierarchy, starting at 0 for the
       * root-level title block. Only present if `enable_document_hierarchy` was set to
       * true in the request.
       */
      hierarchy_level?: number;

      /**
       * The page (0-indexed) that this block belongs to. Only set for heading blocks
       * that are returned in the table of contents.
       */
      page_index?: number;

      /**
       * The IDs of the parent in the document hierarchy, sorted from root-level to
       * bottom. For root-level heading blocks, this will be an empty list. Only present
       * if `enable_document_hierarchy` was set to true in the request.
       */
      parent_ids?: Array<string>;
    }

    export namespace Block {
      /**
       * The normalized bounding box of the block, as relative percentages of the page
       * width and height
       */
      export interface BoundingBox {
        /**
         * The x-coordinate of the top-left corner of the bounding box
         */
        x0: number;

        /**
         * The x-coordinate of the bottom-right corner of the bounding box
         */
        x1: number;

        /**
         * The y-coordinate of the top-left corner of the bounding box
         */
        y0: number;

        /**
         * The y-coordinate of the bottom-right corner of the bounding box
         */
        y1: number;
      }
    }
  }
}

/**
 * /parse status reponse object.
 */
export interface ParseJobStatusResponse {
  /**
   * The name of the file that was uploaded for parsing
   */
  file_name: string;

  /**
   * The current status of the parse job
   */
  status: 'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled';
}

/**
 * /parse list jobs object.
 */
export interface ParseJobsResponse {
  /**
   * List of parse jobs
   */
  jobs: Array<ParseJobsResponse.Job>;

  /**
   * Total number of parse jobs
   */
  total_jobs: number;
}

export namespace ParseJobsResponse {
  export interface Job {
    /**
     * Unique ID of the parse job
     */
    id: string;

    /**
     * The name of the file that was uploaded for parsing
     */
    file_name: string;

    /**
     * The current status of the parse job
     */
    status: 'pending' | 'processing' | 'retrying' | 'completed' | 'failed' | 'cancelled';
  }
}

export interface ParseCreateParams {
  /**
   * The file to be parsed. The file type must be PDF, DOC / DOCX, PPT / PPTX.
   */
  raw_file: Core.Uploadable;

  /**
   * Adds a table of contents to the output with the structure of the entire parsed
   * document. This feature is in beta. Controls parsing heading levels (e.g. H1, H2,
   * H3) at higher quality. Not permitted in `basic` parsing_mode, or if page_range
   * is not continuous and/or does not start from page zero.
   */
  enable_document_hierarchy?: boolean;

  /**
   * Controls whether tables are split into multiple tables by row with the headers
   * propagated. Use for improving LLM comprehension of very large tables. Not
   * permitted in `basic` parsing_mode.
   */
  enable_split_tables?: boolean;

  /**
   * Controls how thorough figure captions are. `concise` is short and minimizes
   * chances of hallucinations. `detailed` is more thorough and can include
   * commentary; this mode is in beta. Not permitted in `basic` parsing_mode.
   */
  figure_caption_mode?: 'concise' | 'detailed';

  /**
   * Threshold number of table cells beyond which large tables are split if
   * `enable_split_tables` is True. Not permitted in `basic` parsing_mode.
   */
  max_split_table_cells?: number;

  /**
   * Optional string representing page range to be parsed. Format: comma-separated
   * indexes (0-based, e.g. `0,1,2,5,6`), or ranges inclusive of both ends (e.g.
   * `0-2,5,6`)
   */
  page_range?: string;

  /**
   * The settings to use for parsing. `basic` is for simple, text-only documents.
   * `standard` is for complex documents with images, complex hierarchy, and/or no
   * natively encoded textual data (e.g. for scanned documents).
   */
  parse_mode?: 'basic' | 'standard';
}

export interface ParseJobResultsParams {
  /**
   * The desired output format(s) of the parsed file. Must be `markdown-document`,
   * `markdown-per-page`, and/or `blocks-per-page`. Specify multiple values to get
   * multiple formats in the response. `markdown-document` parses the whole document
   * into a single concatenated markdown output. `markdown-per-page` provides
   * markdown output per page. `blocks-per-page` provides a structured JSON
   * representation of the content blocks on each page, sorted by reading order.
   */
  output_types?: Array<'markdown-document' | 'markdown-per-page' | 'blocks-per-page'>;
}

export interface ParseJobsParams {
  uploaded_after?: string;
}

export declare namespace Parse {
  export {
    type ParseCreateResponse as ParseCreateResponse,
    type ParseJobResultsResponse as ParseJobResultsResponse,
    type ParseJobStatusResponse as ParseJobStatusResponse,
    type ParseJobsResponse as ParseJobsResponse,
    type ParseCreateParams as ParseCreateParams,
    type ParseJobResultsParams as ParseJobResultsParams,
    type ParseJobsParams as ParseJobsParams,
  };
}
