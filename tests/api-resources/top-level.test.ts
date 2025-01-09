// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextualAI from 'contextual-client';
import { Response } from 'node-fetch';

const client = new ContextualAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('lmUnit: only required params', async () => {
    const responsePromise = client.lmUnit({ query: 'query', response: 'response', unit_test: 'unit_test' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('lmUnit: required and optional params', async () => {
    const response = await client.lmUnit({ query: 'query', response: 'response', unit_test: 'unit_test' });
  });
});
