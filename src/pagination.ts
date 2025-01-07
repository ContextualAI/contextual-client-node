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

export interface DatastoresDocumentsListPaginationResponse<Item> {
  documents: Array<Item>;

  next_cursor: string;
}

export interface DatastoresDocumentsListPaginationParams {
  cursor?: string;

  limit?: number;
}

export class DatastoresDocumentsListPagination<Item>
  extends AbstractPage<Item>
  implements DatastoresDocumentsListPaginationResponse<Item>
{
  documents: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: DatastoresDocumentsListPaginationResponse<Item>,
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
  nextPageParams(): Partial<DatastoresDocumentsListPaginationParams> | null {
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

export interface ApplicationsListPaginationResponse<Item> {
  applications: Array<Item>;

  next_cursor: string;
}

export interface ApplicationsListPaginationParams {
  cursor?: string;

  limit?: number;
}

export class ApplicationsListPagination<Item>
  extends AbstractPage<Item>
  implements ApplicationsListPaginationResponse<Item>
{
  applications: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: ApplicationsListPaginationResponse<Item>,
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
  nextPageParams(): Partial<ApplicationsListPaginationParams> | null {
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

export interface EvalJobsListPaginationResponse<Item> {
  evaluation_rounds: Array<Item>;

  next_cursor: string;
}

export interface EvalJobsListPaginationParams {
  cursor?: string;

  limit?: number;
}

export class EvalJobsListPagination<Item>
  extends AbstractPage<Item>
  implements EvalJobsListPaginationResponse<Item>
{
  evaluation_rounds: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: EvalJobsListPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.evaluation_rounds = body.evaluation_rounds || [];
    this.next_cursor = body.next_cursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.evaluation_rounds ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<EvalJobsListPaginationParams> | null {
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

export interface ApplicationsListPaginationResponse<Item> {
  applications: Array<Item>;

  next_cursor: string;
}

export interface ApplicationsListPaginationParams {
  cursor?: string;

  limit?: number;
}

export class ApplicationsListPagination<Item>
  extends AbstractPage<Item>
  implements ApplicationsListPaginationResponse<Item>
{
  applications: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: ApplicationsListPaginationResponse<Item>,
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
  nextPageParams(): Partial<ApplicationsListPaginationParams> | null {
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

export interface ApplicationsListPaginationResponse<Item> {
  applications: Array<Item>;

  next_cursor: string;
}

export interface ApplicationsListPaginationParams {
  cursor?: string;

  limit?: number;
}

export class ApplicationsListPagination<Item>
  extends AbstractPage<Item>
  implements ApplicationsListPaginationResponse<Item>
{
  applications: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: ApplicationsListPaginationResponse<Item>,
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
  nextPageParams(): Partial<ApplicationsListPaginationParams> | null {
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

export interface ApplicationsListPaginationResponse<Item> {
  applications: Array<Item>;

  next_cursor: string;
}

export interface ApplicationsListPaginationParams {
  cursor?: string;

  limit?: number;
}

export class ApplicationsListPagination<Item>
  extends AbstractPage<Item>
  implements ApplicationsListPaginationResponse<Item>
{
  applications: Array<Item>;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: ApplicationsListPaginationResponse<Item>,
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
  nextPageParams(): Partial<ApplicationsListPaginationParams> | null {
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
