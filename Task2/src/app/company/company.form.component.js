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
var company_1 = require("./company");
var router_1 = require("@angular/router");
var company_service_1 = require("./company.service");
var CompanyFormComponent = (function () {
    function CompanyFormComponent(_activatedRoute, _companyService, _router //,_company: Company
    ) {
        this._activatedRoute = _activatedRoute;
        this._companyService = _companyService;
        this._router = _router; //,_company: Company
        this.model = new company_1.Company();
        //this.model = _company;
    }
    CompanyFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageHeader = "New Company";
        this._activatedRoute.queryParams.subscribe(function (params) {
            _this.companyId = JSON.parse(params["companyid"]);
        });
        if (this.companyId != 0) {
            this.getCompany();
        }
    };
    CompanyFormComponent.prototype.onSave = function () {
        var _this = this;
        this._companyService.addCompany(this.model).subscribe(function (company) {
            _this.companies.push(company);
        });
        this._router.navigate(['/company']);
    };
    CompanyFormComponent.prototype.onCancel = function () {
        this._router.navigate(['/company']);
    };
    CompanyFormComponent.prototype.getCompany = function () {
        var _this = this;
        this.pageHeader = "Edit Company";
        this._companyService.getCompany(this.companyId)
            .subscribe(function (hero) { return _this.model = hero; });
    };
    CompanyFormComponent.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies().subscribe(function (companyData) { return _this.companies = companyData; });
    };
    return CompanyFormComponent;
}());
CompanyFormComponent = __decorate([
    core_1.Component({
        selector: 'app-company-form',
        templateUrl: './company.form.component.html',
        providers: [company_service_1.CompanyService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, company_service_1.CompanyService,
        router_1.Router //,_company: Company
    ])
], CompanyFormComponent);
exports.CompanyFormComponent = CompanyFormComponent;
//# sourceMappingURL=company.form.component.js.map