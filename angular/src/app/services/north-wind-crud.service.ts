import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthWindCRUDService {
  constructor(
    private http: HttpClient
  ) { }

  public postCategory(data: any): Observable<any> {
    const options = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw',
      },
    };
    const body = data;
    return this.http.post(`${API_ENDPOINT}/Category`, body, options);
  }

  public putCategory(data: any): Observable<any> {
    const options = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw',
      },
    };
    const body = data;
    return this.http.put(`${API_ENDPOINT}/Category`, body, options);
  }

  public deleteCategory(id: string): Observable<any> {
    const options = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw',
      },
    };
    return this.http.delete(`${API_ENDPOINT}/Category/${id}`, options);
  }

  public getCategory(): Observable<any> {
    const options = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw',
      },
    };
    return this.http.get(`${API_ENDPOINT}/Category`, options);
  }
}
