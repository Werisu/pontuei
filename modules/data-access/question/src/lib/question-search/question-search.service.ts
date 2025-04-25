import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionSearchService {
  constructor(private http: HttpClient) {}

  // searchQuestions(query: string): Observable<Question[]> {
  //   return this.http.get<Question[]>(`${this.apiUrl}/questions?q=${query}`);
  // }
}
