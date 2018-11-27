import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Company } from './company';
//import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//export class CompanyService {
//    constructor(private http: HttpClient) { }
//    //getCompany(): Observable<Company[]> {
//    //    return this._http.get("http://localhost:64210/api/Companies")
//    //        .map((response: Response) => <Company[]>response.json())
//    //}
//}
@Injectable()
export class CompanyService {
    private CompaniesUrl = 'api/companies';
    constructor(private http: HttpClient) { }

    /** GET heroes from the server */
    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.CompaniesUrl)
    }

    getCompany(id: number): Observable<Company> {
        const url = `${this.CompaniesUrl}/${id}`;
        return this.http.get<Company>(url)
    }

    //////// Save methods //////////

    /** POST: add a new hero to the server */
    addCompany(company: Company): Observable<Company> {
        return this.http.post<Company>(this.CompaniesUrl, company, httpOptions);
    }

    /** DELETE: delete the hero from the server */
    deleteCompany(company: Company | number): Observable<Company> {
        const id = typeof company === 'number' ? company : company.id;
        const url = `${this.CompaniesUrl}/${id}`;

        return this.http.delete<Company>(url, httpOptions);
    }

    /** PUT: update the hero on the server */
    updateCompany(company: Company): Observable<any> {
        return this.http.put(this.CompaniesUrl, company, httpOptions);
    }
    /* GET heroes whose name contains search term */
    searchCompany(companyId: number): Observable<Company[]> {
        return this.http.get<Company[]>(`${this.CompaniesUrl}/?id=${companyId}`);
    }
}
