// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * One logical block of content from a parsed page.
 */
export interface ParsedBlock {
  /**
   * Unique ID of the block
   */
  id: string;

  /**
   * The normalized bounding box of the block, as relative percentages of the page
   * width and height
   */
  bounding_box: ParsedBlock.BoundingBox;

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

export namespace ParsedBlock {
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
