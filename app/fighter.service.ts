import { Headers, Http } from '@angular/http';
import { Injectable }    from '@angular/core';

import { Fighter }    from './fighter';
import 'rxjs/Rx';

@Injectable()
export class FighterService {
  private fightersUrl = 'http://protected-fjord-16041.herokuapp.com/fighters';
  constructor(private http: Http) { }

  getFighters() { 
    return this.http.get(this.fightersUrl)
      .toPromise()
      .then(fighters => fighters.json() as Fighter[])
      .catch(this.handleError);
  }

  getFighter(id: number) {
    return this.getFighters()
    .then(fighters => fighters.find(fighter => fighter.id === id));
  }
  
  private post(fighter: Fighter): Promise<Fighter> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
      .post(this.fightersUrl, JSON.stringify(fighter), {headers: headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private put(fighter: Fighter) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.fightersUrl}/${fighter.id}`;

    return this.http
      .put(url, JSON.stringify(fighter), {headers: headers})
      .toPromise()
      .then(() => fighter)
      .catch(this.handleError);
  }

  delete(fighter: Fighter) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.fightersUrl}/${fighter.id}`;

    return this.http
      .delete(url, {headers: headers})
      .toPromise()
      .catch(this.handleError);
  }

  save(fighter: Fighter): Promise<Fighter>  {
    if (fighter.id) {
      return this.put(fighter);
    }
    return this.post(fighter);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }
}

