import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
import { environment } from '../../../environments/environment';


@Injectable()
export class ContactService {

  constructor(private http: HttpClient ) { }


  list(): Observable<Contact[]> {
    return this.http
        .get<Contact[]>(`${environment.apiUrl}/contacts`);
  }

  show(id: number): Observable<Contact> {
    return this.http
        .get<Contact>(`${environment.apiUrl}/contacts/${id}`);
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.apiUrl}/contacts`, contact);
  }

  update(contact: Partial<Contact>): Observable<Contact> {
    return this.http.patch<Contact>(`${environment.apiUrl}/contacts/${contact.id}`, contact);
  }


  destroy(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${environment.apiUrl}/contacts/${id}`);
  }

}
