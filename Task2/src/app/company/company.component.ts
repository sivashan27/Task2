import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { ActivatedRoute, Router, Route, NavigationExtras } from '@angular/router';
import { CompanyService } from './company.service';

@Component({
    selector: 'my-company',
    templateUrl: 'app/company/company.component.html',
    providers: [CompanyService]
})
export class CompanyComponent implements OnInit  {
    companies: Company[];
    companyid: number;
    existingCompanies: Company[];
    constructor(private _companyService: CompanyService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    }

    ngOnInit() {
        this.getCompanies();
    }

    getCompanies(): void{
        this._companyService.getCompanies().subscribe((companyData) => this.companies = companyData);
    }

    onCreateClick(): void {
        this.companyid = 0;
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "companyid": JSON.stringify(this.companyid)
            }
        };
        this._router.navigate(['/companyform'], navigationExtras);
    }
    onEditClick(_companyId: number): void {
        this.companyid = _companyId;
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "companyid": JSON.stringify(this.companyid)
            }
        };
        this._router.navigate(['/companyform'], navigationExtras);
    }

    onDeleteClick(company: Company): void {
        if (confirm("Are you sure to delete" + company.CompanyName)) {
            this.companies = this.companies.filter(h => h !== company);
            this._companyService.deleteCompany(company).subscribe();
        }
    }
}