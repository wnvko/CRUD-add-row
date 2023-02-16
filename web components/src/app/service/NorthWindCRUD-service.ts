const API_ENDPOINT = 'https://data-northwind.indigo.design';

export default class NorthWindCRUDService {
  public postCategory = async (data: any): Promise<any> => {
    const body = JSON.stringify(data);
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw',
      'Content-Type': 'application/json',
    };
    const options = {
      method: 'POST',
      body,
      headers,
    };
    const response = await fetch(`${API_ENDPOINT}/Category`, options);
    if (!response.ok) {
      return Promise.reject(new Error(`Failed to POST. Error Code: ${response.status}`));
    }
    return response.json();
  }

  public deleteCategory = async (id: string): Promise<any> => {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw',
      'Content-Type': 'application/json',
    };
    const options = {
      method: 'DELETE',
      headers,
    };
    const response = await fetch(`${API_ENDPOINT}/Category/${id}`, options);
    if (!response.ok) {
      return Promise.reject(new Error(`Failed to DELETE. Error Code: ${response.status}`));
    }
    return response.json();
  }

  public putCategory = async (data: any): Promise<any> => {
    const body = JSON.stringify(data);
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw',
      'Content-Type': 'application/json',
    };
    const options = {
      method: 'PUT',
      body,
      headers,
    };
    const response = await fetch(`${API_ENDPOINT}/Category`, options);
    if (!response.ok) {
      return Promise.reject(new Error(`Failed to PUT. Error Code: ${response.status}`));
    }
    return response.json();
  }

  public getCategory = async (): Promise<any> => {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjA1ZDI4ZGQ2LWQzYWItNGM2Yi1hYWJiLWE4YmU3YTMxOTFhMyIsInN1YiI6ImdtYXJ0aW5lekBpbmZyYWdpc3RpY3MuY29tIiwiZW1haWwiOiJnbWFydGluZXpAaW5mcmFnaXN0aWNzLmNvbSIsImp0aSI6IjdhNjczMzJlLTI1ZDktNGU3NS1hNzM3LTU1MTdjOWFkMjkxOSIsIm5iZiI6MTY2ODcwOTExMywiZXhwIjoxNjY4NzA5NDEzLCJpYXQiOjE2Njg3MDkxMTMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC8ifQ.sVRzZCh2ao-SGflByPxsDGdEFstAB17KKHaPdv9vxDDIpr3b1NY4G9LpU1eX4aCvDZbAX6finGSblfda2mcwpw',
    };
    const options = {
      method: 'GET',
      headers,
    };
    const response = await fetch(`${API_ENDPOINT}/Category`, options);
    if (!response.ok) {
      return Promise.reject(new Error(`Failed to GET. Error Code: ${response.status}`));
    }
    return response.json();
  }
}
