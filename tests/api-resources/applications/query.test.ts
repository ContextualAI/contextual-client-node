// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextualAI from 'contextual-client';
import { Response } from 'node-fetch';

const client = new ContextualAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  test('feedback: only required params', async () => {
    const responsePromise = client.applications.query.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      feedback: 'thumbs_up',
      message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('feedback: required and optional params', async () => {
    const response = await client.applications.query.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      feedback: 'thumbs_up',
      message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      content_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      explanation: 'explanation',
    });
  });

  test('metrics', async () => {
    const responsePromise = client.applications.query.metrics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('metrics: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.query.metrics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('metrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.query.metrics(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          created_after: '2019-12-27T18:11:19.117Z',
          created_before: '2019-12-27T18:11:19.117Z',
          limit: 0,
          offset: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('start: only required params', async () => {
    const responsePromise = client.applications.query.start('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      messages: [{ content: 'content', role: 'user' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('start: required and optional params', async () => {
    const response = await client.applications.query.start('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      messages: [{ content: 'content', role: 'user' }],
      retrievals_only: true,
      conversation_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      model_id: 'model_id',
      stream: true,
    });
  });
});
