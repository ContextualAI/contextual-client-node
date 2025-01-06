// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface DatastoresListPaginationResponse<Item> {
  datastores: Array<Item>;

  next_cursor: string;
}

export interface DatastoresListPaginationParams {
  cursor?: string;

  limit?: number;
}

export class DatastoresListPagination<Item>
  extends AbstractPage<Item>
  implements DatastoresListPaginationResponse<Item>
{
  datastores: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: DatastoresListPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.datastores = body.datastores || [];
    this.next_cursor = body.next_cursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.datastores ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<DatastoresListPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}
