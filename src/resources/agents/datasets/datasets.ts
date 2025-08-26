// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EvaluateAPI from './evaluate';
import { Evaluate } from './evaluate';
import * as TuneAPI from './tune';
import { Tune } from './tune';

export class Datasets extends APIResource {
  tune: TuneAPI.Tune = new TuneAPI.Tune(this._client);
  evaluate: EvaluateAPI.Evaluate = new EvaluateAPI.Evaluate(this._client);
}

Datasets.Tune = Tune;
Datasets.Evaluate = Evaluate;

export declare namespace Datasets {
  export { Tune as Tune };

  export { Evaluate as Evaluate };
}
