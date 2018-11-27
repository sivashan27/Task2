"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
//import { Http, Response } from '@angular/http';
require("rxjs/add/operator/map");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
//export class CompanyService {
//    constructor(private http: HttpClient) { }
//    //getCompany(): Observable<Company[]> {
//    //    return this._http.get("http://localhost:64210/api/Companies")
//    //        .map((response: Response) => <Company[]>response.json())
//    //}
//}
var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.CompaniesUrl = 'api/companies';
    }
    /** GET heroes from the server */
    CompanyService.prototype.getCompanies = function () {
        return this.http.get(this.CompaniesUrl);
    };
    CompanyService.prototype.getCompany = function (id) {
        var url = this.CompaniesUrl + "/" + id;
        return this.http.get(url);
    };
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    CompanyService.prototype.addCompany = function (company) {
        return this.http.post(this.CompaniesUrl, company, httpOptions);
    };
    /** DELETE: delete the hero from the server */
    CompanyService.prototype.deleteCompany = function (company) {
        var id = typeof company === 'number' ? company : company.id;
        var url = this.CompaniesUrl + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    /** PUT: update the hero on the server */
    CompanyService.prototype.updateCompany = function (company) {
        return this.http.put(this.CompaniesUrl, company, httpOptions);
    };
    /* GET heroes whose name contains search term */
    CompanyService.prototype.searchCompany = function (companyId) {
        return this.http.get(this.CompaniesUrl + "/?id=" + companyId);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map