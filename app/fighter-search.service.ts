import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Fighter }           from './fighter';

@Injectable()
export class FighterSearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http
               .get(`http://localhost:3001/fighters?name=${term}`)
               .map((r: Response) => r.json() as Fighter[]);
  }
}

