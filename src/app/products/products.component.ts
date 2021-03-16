import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   public sampleResponse: any = {
        displayHeader: [{
            displayName: 'Pkey',
            name: 'pkey',
            defaultColumn: true,
            show: true,
            searchFieldType: 'number'
        },
        {
            displayName: 'Model Number',
            name: 'modelNumber',
            defaultColumn: false,
            show: false,
            searchFieldType: 'text'
        },
        {
            displayName: 'Installed Date',
            name: 'installedDate',
            defaultColumn: false,
            show: false,
            searchFieldType: 'date'
        },
        {
            displayName: 'Asset Uid',
            name: 'assetUid',
            defaultColumn: true,
            show: true,
            searchFieldType: 'text'
        },
        {
            displayName: 'Criticality',
            name: 'criticality',
            defaultColumn: false,
            show: false,
            searchFieldType: 'number'
        },

        {
            displayName: 'Warranty Expiry',
            name: 'warrantyExpiry',
            defaultColumn: true,
            show: true,
            searchFieldType: 'date'
        },
        {
            displayName: 'Customer Id',
            name: 'customerId',
            defaultColumn: true,
            show: true,
            searchFieldType: 'number'
        },
        {
            displayName: 'Description',
            name: 'description',
            defaultColumn: true,
            show: true,
            searchFieldType: 'text'
        },
        {
            displayName: 'Machine Name',
            name: 'machineName',
            defaultColumn: false,
            show: false,
            searchFieldType: 'text'
        },
        {
            displayName: 'Make',
            name: 'make',
            defaultColumn: false,
            show: false,
            searchFieldType: 'text'
        },
        {
            displayName: 'Serial Number',
            name: 'serialNumber',
            defaultColumn: false,
            show: false,
            searchFieldType: 'text'
        }],
        data: [
            {
                "pkey": 1,
                "assetUid": "ast128765",
                "customerId": 12345,
                "description": "hello123",
                "machineName": "caterpillar",
                "make": "2018",
                "serialNumber": "546yhgt9uy2",
                "modelNumber": "h343h8743h09j",
                "installedDate": "2019-06-02T16:59:10",
                "warrantyExpiry": "2021-03-14T10:30:50",
                "isActive": true,
                "location": "india",
                "powerRating": "1",
                "supplier": "TATA",
                "category": 1,
                "criticality": 1
            },
            {
                "pkey": 2,
                "assetUid": "ast128766",
                "customerId": 12346,
                "description": "hello",
                "machineName": "JCB",
                "make": "2018",
                "serialNumber": "546yhgt9uy2",
                "modelNumber": "h343h8743h09j",
                "installedDate": "2019-06-02T16:59:51",
                "warrantyExpiry": "2021-03-13T10:30:50",
                "isActive": true,
                "location": "india",
                "powerRating": "1",
                "supplier": "TATA",
                "category": 2,
                "criticality": 1
            }, {
                "pkey": 3,
                "assetUid": "ast128767",
                "customerId": 12347,
                "description": "hello",
                "machineName": "JCB small",
                "make": "2018",
                "serialNumber": "546yhgt9uy2",
                "modelNumber": "h343h8743h09j",
                "installedDate": "2019-06-02T16:59:51",
                "warrantyExpiry": "2021-03-12T10:30:50",
                "isActive": true,
                "location": "india",
                "powerRating": "1",
                "supplier": "TATA",
                "category": 2,
                "criticality": 1
            }, {
                "pkey": 4,
                "assetUid": "ast128768",
                "customerId": 12345,
                "description": "hello",
                "machineName": "JCB heavy",
                "make": "2018",
                "serialNumber": "546yhgt9uy2",
                "modelNumber": "h343h8743h09j",
                "installedDate": "2019-06-02T16:59:51",
                "warrantyExpiry": "2021-03-11T10:30:50",
                "isActive": true,
                "location": "india",
                "powerRating": "3",
                "supplier": "TATA",
                "category": 2,
                "criticality": 1
            }, {
                "pkey": 5,
                "assetUid": "ast128769",
                "customerId": 12347,
                "description": "hello",
                "machineName": "caterpillar small",
                "make": "2018",
                "serialNumber": "546yhgt9uy2",
                "modelNumber": "h343h8743h09j",
                "installedDate": "2019-06-02T16:59:51",
                "warrantyExpiry": "2021-03-10T10:30:50",
                "isActive": true,
                "location": "india",
                "powerRating": "3",
                "supplier": "TATA",
                "category": 2,
                "criticality": 3
            }

        ]
    }

}
