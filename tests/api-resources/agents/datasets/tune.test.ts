// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextualAI, { toFile } from 'contextual-client';
import { Response } from 'node-fetch';

const client = new ContextualAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tune', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.datasets.tune.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      dataset_name: 'dataset_name',
      dataset_type: 'tuning_set',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.agents.datasets.tune.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      dataset_name: 'dataset_name',
      dataset_type: 'tuning_set',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.datasets.tune.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'dataset_name', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.datasets.tune.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        'dataset_name',
        { batch_size: 1, version: 'version' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.agents.datasets.tune.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'dataset_name',
      { dataset_type: 'tuning_set', file: await toFile(Buffer.from('# my file contents'), 'README.md') },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.agents.datasets.tune.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'dataset_name',
      { dataset_type: 'tuning_set', file: await toFile(Buffer.from('# my file contents'), 'README.md') },
    );
  });

  test('list', async () => {
    const responsePromise = client.agents.datasets.tune.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.datasets.tune.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.datasets.tune.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { dataset_name: 'dataset_name' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.agents.datasets.tune.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'dataset_name',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.datasets.tune.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'dataset_name', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('metadata', async () => {
    const responsePromise = client.agents.datasets.tune.metadata(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'dataset_name',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('metadata: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.datasets.tune.metadata('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'dataset_name', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('metadata: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.datasets.tune.metadata(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        'dataset_name',
        { version: 'version' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });
});
