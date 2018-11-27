import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { CompanyService } from './company.service';

@Component({
    selector: 'app-company-form',
    templateUrl: './company.form.component.html',
    providers: [CompanyService]
})
export class CompanyFormComponent implements OnInit {
    //sub: import("D:/Learning/Task2/Task2/node_modules/rxjs/Subscription").Subscription;
    pageHeader: string;
    companyId: number;
    model = new Company();
    companies: Company[];
    ngOnInit(): void {
        this.pageHeader = "New Company";
        this._activatedRoute.queryParams.subscribe(params => {
            this.companyId = JSON.parse(params["companyid"]);
        });
        if (this.companyId != 0) {
            this.getCompany();
        }
    }

    constructor(private _activatedRoute: ActivatedRoute, private _companyService: CompanyService,
        private _router: Router//,_company: Company
    ) {
        //this.model = _company;
    }
    onSave(): void {
        this._companyService.addCompany(this.model).subscribe(company => {
            this.companies.push(company);
        });
        this._router.navigate(['/company']);
    }
    onCancel(): void {
        this._router.navigate(['/company'])
    }

    getCompany(): void {
        this.pageHeader = "Edit Company";
        this._companyService.getCompany(this.companyId)
            .subscribe(hero => this.model = hero);
    }
    getCompanies(): void {
        this._companyService.getCompanies().subscribe((companyData) => this.companies = companyData);
    }
}