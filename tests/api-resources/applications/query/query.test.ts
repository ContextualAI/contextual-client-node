// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextualAI from 'contextual-sdk';
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

  test('formFilling: only required params', async () => {
    const responsePromise = client.applications.query.formFilling('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      queries: [{ field: 'field', instructions: 'instructions' }],
      scope_metadata: 'scope_metadata',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('formFilling: required and optional params', async () => {
    const response = await client.applications.query.formFilling('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      queries: [{ field: 'field', instructions: 'instructions' }],
      scope_metadata: 'scope_metadata',
    });
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
