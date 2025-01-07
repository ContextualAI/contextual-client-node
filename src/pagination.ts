// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface DatastoresListResponseResponse<Item> {
  datastores: Array<Item>;

  next_cursor: string;
}

export interface DatastoresListResponseParams {
  cursor?: string;

  limit?: number;
}

export class DatastoresListResponse<Item>
  extends AbstractPage<Item>
  implements DatastoresListResponseResponse<Item>
{
  datastores: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: DatastoresListResponseResponse<Item>,
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
  nextPageParams(): Partial<DatastoresListResponseParams> | null {
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

export interface DatastoresDocumentsListResponseResponse<Item> {
  documents: Array<Item>;

  next_cursor: string;
}

export interface DatastoresDocumentsListResponseParams {
  cursor?: string;

  limit?: number;
}

export class DatastoresDocumentsListResponse<Item>
  extends AbstractPage<Item>
  implements DatastoresDocumentsListResponseResponse<Item>
{
  documents: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: DatastoresDocumentsListResponseResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.documents = body.documents || [];
    this.next_cursor = body.next_cursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.documents ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<DatastoresDocumentsListResponseParams> | null {
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

export interface ApplicationsListResponseResponse<Item> {
  applications: Array<Item>;

  next_cursor: string;
}

export interface ApplicationsListResponseParams {
  cursor?: string;

  limit?: number;
}

export class ApplicationsListResponse<Item>
  extends AbstractPage<Item>
  implements ApplicationsListResponseResponse<Item>
{
  applications: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: ApplicationsListResponseResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.applications = body.applications || [];
    this.next_cursor = body.next_cursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.applications ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ApplicationsListResponseParams> | null {
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
