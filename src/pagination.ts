// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface DatastoresPageResponse<Item> {
  datastores: Array<Item>;

  next_cursor: string;
}

export interface DatastoresPageParams {
  cursor?: string;

  limit?: number;
}

export class DatastoresPage<Item> extends AbstractPage<Item> implements DatastoresPageResponse<Item> {
  datastores: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: DatastoresPageResponse<Item>,
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
  nextPageParams(): Partial<DatastoresPageParams> | null {
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

export interface DocumentsPageResponse<Item> {
  documents: Array<Item>;

  next_cursor: string;
}

export interface DocumentsPageParams {
  cursor?: string;

  limit?: number;
}

export class DocumentsPage<Item> extends AbstractPage<Item> implements DocumentsPageResponse<Item> {
  documents: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: DocumentsPageResponse<Item>,
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
  nextPageParams(): Partial<DocumentsPageParams> | null {
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

export interface UsersPageResponse<Item> {
  users: Array<Item>;

  next_cursor: string;
}

export interface UsersPageParams {
  cursor?: string;

  limit?: number;
}

export class UsersPage<Item> extends AbstractPage<Item> implements UsersPageResponse<Item> {
  users: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: UsersPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.users = body.users || [];
    this.next_cursor = body.next_cursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.users ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<UsersPageParams> | null {
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

export interface PageResponse<Item> {
  agents: Array<Item>;

  next_cursor: string;
}

export interface PageParams {
  cursor?: string;

  limit?: number;
}

export class Page<Item> extends AbstractPage<Item> implements PageResponse<Item> {
  agents: Array<Item>;

  next_cursor: string;

  constructor(client: APIClient, response: Response, body: PageResponse<Item>, options: FinalRequestOptions) {
    super(client, response, body, options);

    this.agents = body.agents || [];
    this.next_cursor = body.next_cursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.agents ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageParams> | null {
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
