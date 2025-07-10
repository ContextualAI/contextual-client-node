// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ContextualAI } from './index';

export abstract class APIResource {
  protected _client: ContextualAI;

  constructor(client: ContextualAI) {
    this._client = client;
  }
}
