// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as JobsAPI from './jobs';
import { Jobs } from './jobs';

export class Evaluate extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Evaluate.Jobs = Jobs;

export declare namespace Evaluate {
  export { Jobs as Jobs };
}
