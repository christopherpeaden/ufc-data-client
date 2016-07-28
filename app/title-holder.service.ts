import { Http } from '@angular/http';
import { Injectable }    from '@angular/core';

@Injectable()
export class TitleHolderService {
private titleHoldersUrl = 'http://localhost:3001/fighters/title_holders';
  constructor(private http: Http) { }

  getTitleHolders() {
    return this.http.get(this.titleHoldersUrl)
      .toPromise()
      .then(titleHolders => titleHolders.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }
}

