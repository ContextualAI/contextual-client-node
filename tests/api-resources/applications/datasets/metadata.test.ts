// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sunrise from 'sunrise';
import { Response } from 'node-fetch';

const client = new Sunrise({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metadata', () => {
  test('retrieve', async () => {
    const responsePromise = client.applications.datasets.metadata.retrieve(
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

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.datasets.metadata.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'dataset_name', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Sunrise.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.datasets.metadata.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        'dataset_name',
        { version: 'version' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sunrise.NotFoundError);
  });
});
