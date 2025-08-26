// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as JobsAPI from './jobs';
import { Jobs } from './jobs';
import * as ModelsAPI from './models';
import { Models } from './models';

export class Tune extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
}

Tune.Jobs = Jobs;
Tune.Models = Models;

export declare namespace Tune {
  export { Jobs as Jobs };

  export { Models as Models };
}
