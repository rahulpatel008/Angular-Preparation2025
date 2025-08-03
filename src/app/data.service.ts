import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  getLargeData(): Observable<any[]> {
    const data = Array.from({ length: 100000 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      age: 20 + (i % 50),
      country: ['India', 'USA', 'UK', 'Germany', 'Canada'][i % 5],
      status: ['Active', 'Inactive'][i % 2],
      registeredOn: new Date(2020, 0, 1 + (i % 365)).toDateString()
    }));
    return of(data); // simulate API
  }
}
