// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextualAI, { toFile } from 'contextual-client';
import { Response } from 'node-fetch';

const client = new ContextualAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tune', () => {
  test('create', async () => {
    const responsePromise = client.agents.tune.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.tune.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.tune.create(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          'hyperparams[learning_rate]': 1,
          'hyperparams[lora_alpha]': 8,
          'hyperparams[lora_dropout]': 0,
          'hyperparams[lora_rank]': 8,
          'hyperparams[num_epochs]': 1,
          'hyperparams[warmup_ratio]': 0,
          metadata_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
          sdp_only: true,
          synth_data: true,
          test_dataset_name: 'test_dataset_name',
          test_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
          train_dataset_name: 'train_dataset_name',
          training_file: await toFile(Buffer.from('# my file contents'), 'README.md'),
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ContextualAI.NotFoundError);
  });
});
