import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 1, title: 'title1', body: 'lorem' },
      { id: 2, title: 'title2', body: 'lorem' },
      { id: 3, title: 'title3', body: 'lorem' },
      { id: 4, title: 'title4', body: 'lorem' },
      { id: 5, title: 'title5', body: 'lorem' },
      { id: 6, title: 'title6', body: 'lorem' },
      { id: 7, title: 'title7', body: 'lorem' },
      { id: 8, title: 'title8', body: 'lorem' },
    ];
    return {posts};
  }
}
