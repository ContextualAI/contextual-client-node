// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextualAI, { toFile } from 'contextual-client';
import { Response } from 'node-fetch';

const client = new ContextualAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluate', () => {
  test('launch: only required params', async () => {
    const responsePromise = client.agents.evaluate.launch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      metrics: ['equivalence'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('launch: required and optional params', async () => {
    const response = await client.agents.evaluate.launch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      metrics: ['equivalence'],
      evalset_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      evalset_name: 'evalset_name',
      model_name: 'model_name',
    });
  });
});
