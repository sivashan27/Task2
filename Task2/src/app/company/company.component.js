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
var router_1 = require("@angular/router");
var company_service_1 = require("./company.service");
var CompanyComponent = (function () {
    function CompanyComponent(_companyService, _activatedRoute, _router) {
        this._companyService = _companyService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    CompanyComponent.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies().subscribe(function (companyData) { return _this.companies = companyData; });
    };
    CompanyComponent.prototype.onCreateClick = function () {
        this.companyid = 0;
        var navigationExtras = {
            queryParams: {
                "companyid": JSON.stringify(this.companyid)
            }
        };
        this._router.navigate(['/companyform'], navigationExtras);
    };
    CompanyComponent.prototype.onEditClick = function (_companyId) {
        this.companyid = _companyId;
        var navigationExtras = {
            queryParams: {
                "companyid": JSON.stringify(this.companyid)
            }
        };
        this._router.navigate(['/companyform'], navigationExtras);
    };
    CompanyComponent.prototype.onDeleteClick = function (company) {
        if (confirm("Are you sure to delete" + company.CompanyName)) {
            this.companies = this.companies.filter(function (h) { return h !== company; });
            this._companyService.deleteCompany(company).subscribe();
        }
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    core_1.Component({
        selector: 'my-company',
        templateUrl: 'app/company/company.component.html',
        providers: [company_service_1.CompanyService]
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute, router_1.Router])
], CompanyComponent);
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map