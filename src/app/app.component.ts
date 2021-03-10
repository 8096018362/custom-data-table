import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchInputToValue: any = '';
  searchInputFromValue: any = '';
  selname: any = '';
  selfieldType: any = '';
  title = 'table-angular';
  searchArray: any = [];
  selectedSearchObj: any;
  openSearchFields(columnObj: any) {
   
    this.searchArray = [];
    this.selname = "";
    this.selfieldType = "";

    this.selectedSearchObj = columnObj;
    this.searchArray = columnObj.searchType;
  }
  public searchInputValue: any = '';
  public campaignOne: any = {};
  public campaignTwo: any = {};

  initColumns = [
    {
      name: 'pkey',
      defaultColumn: true,
      show: true,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'number'
        },
        {
          searchType: 'greterthan',
          searchFieldType: 'number'
        },
        {
          searchType: 'lessthan',
          searchFieldType: 'number'
        },
        {
          searchType: 'between',
          searchFieldType: 'number'
        }
      ]
    },
    {
      name: 'criticality',
      defaultColumn: false,
      show: false,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'number'
        },
        {
          searchType: 'greterthan',
          searchFieldType: 'number'
        },
        {
          searchType: 'lessthan',
          searchFieldType: 'number'
        },
        {
          searchType: 'between',
          searchFieldType: 'number'
        }
      ]
    },
    {
      name: 'assetUid',
      defaultColumn: true,
      show: true,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'input'
        }
      ]
    },
    {
      name: 'warrantyExpiry',
      defaultColumn: false,
      show: false,
      searchType: [
        {
          searchType: 'between',
          searchFieldType: 'date'
        }
      ]
    },
    {
      name: 'customerId',
      defaultColumn: true,
      show: true,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'input'
        }
      ]
    },
    {
      name: 'description',
      defaultColumn: true,
      show: true,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'input'
        }
      ]
    },
    {
      name: 'machineName',
      defaultColumn: false,
      show: false,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'input'
        }
      ]
    },
    {
      name: 'make',
      defaultColumn: false,
      show: false,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'input'
        }
      ]
    },
    {
      name: 'serialNumber',
      defaultColumn: false,
      show: false,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'input'
        }
      ]
    },
    {
      name: 'modelNumber',
      defaultColumn: false,
      show: false,
      searchType: [
        {
          searchType: 'single',
          searchFieldType: 'input'
        }
      ]
    }
    // "installedDate", "warrantyExpiry", "isActive", "location", "powerRating", "supplier", "category", "criticality"];
  ]

  displayedColumns: any = [];
  dataSource: any = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.initColumns.map(col => {
      if (col.defaultColumn) {
        this.displayedColumns.push(col.name)
      }
    });
    setTimeout(() => {
      this.dataSource.data = ELEMENT_DATA;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 1000);
  }

  ngOnInit() {

  }


  columnOpearation(index: any) {
    this.searchArray = [];
    this.selname = "";
    this.selfieldType = "";

    if (this.initColumns[index].show) {
      this.initColumns[index].show = false;
      this.displayedColumns.splice(index, 1);
    } else {
      this.initColumns[index].show = true;
      this.displayedColumns.push(this.initColumns[index].name)
    }

  }

  selectedSearchType(sObj: any) {
    this.selfieldType = sObj.searchFieldType;
    this.selname = sObj.searchType;
  }


  finalArray: any = [];
  public fetchDataByFiltered() {
    this.finalArray = [];
    let mainKey = this.selectedSearchObj.name;
    let searchType = this.selname;

    let dataSource: any = ELEMENT_DATA;

    switch (searchType) {

      case "single":
        dataSource.map((itm: any) => {
          if (itm[mainKey] == this.searchInputValue) {
            this.finalArray.push(itm)
          }
        });
        this.dataSet();
        break;
      case 'greterthan':
        dataSource.map((itm: any) => {
          if (itm[mainKey] > this.searchInputValue) {
            this.finalArray.push(itm)
          }
        });
        this.dataSet();
        break;
      case 'lessthan':
        dataSource.map((itm: any) => {
          if (itm[mainKey] < this.searchInputValue) {
            this.finalArray.push(itm)
          }
        });
        this.dataSet();
        break;
      case 'between':
        dataSource.map((itm: any) => {
          if (itm[mainKey] > this.searchInputFromValue && itm[mainKey] < this.searchInputToValue) {
            this.finalArray.push(itm)
          }
        });
        this.dataSet();
        break;
    }

  }
  dataSet() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.finalArray);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 500);
    }, 2000);
  }


  resetTable() {

    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    this.searchArray = [];
    this.selname = "";
    this.selfieldType = "";
  }


}

const ELEMENT_DATA: any = [
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
    "warrantyExpiry": "2021-12-25T10:30:50",
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
    "customerId": 12345,
    "description": "hello",
    "machineName": "JCB",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "1",
    "supplier": "TATA",
    "category": 2,
    "criticality": 1
  }, {
    "pkey": 3,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "JCB small",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "1",
    "supplier": "TATA",
    "category": 2,
    "criticality": 1
  }, {
    "pkey": 4,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "JCB heavy",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "3",
    "supplier": "TATA",
    "category": 2,
    "criticality": 1
  }, {
    "pkey": 5,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "caterpillar small",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "3",
    "supplier": "TATA",
    "category": 2,
    "criticality": 3
  }
  , {
    "pkey": 6,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "caterpillar mediun",
    "make": "2017",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "3",
    "supplier": "TATA",
    "category": 2,
    "criticality": 3
  }, {
    "pkey": 7,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "JCB",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "3",
    "supplier": "TATA",
    "category": 2,
    "criticality": 3
  }, {
    "pkey": 8,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "crane S",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "4",
    "supplier": "TATA",
    "category": 2,
    "criticality": 3
  }, {
    "pkey": 9,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "crane M",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "4",
    "supplier": "TATA",
    "category": 2,
    "criticality": 4
  }, {
    "pkey": 10,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "crane L",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "4",
    "supplier": "TATA",
    "category": 2,
    "criticality": 4
  }, {
    "pkey": 11,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "JCB",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "2",
    "supplier": "TATA",
    "category": 2,
    "criticality": 4
  }, {
    "pkey": 12,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "JCB",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "2",
    "supplier": "TATA",
    "category": 2,
    "criticality": 2
  }, {
    "pkey": 13,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "small jeep",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "2",
    "supplier": "TATA",
    "category": 2,
    "criticality": 2
  }, {
    "pkey": 14,
    "assetUid": "ast128766",
    "customerId": 12345,
    "description": "hello",
    "machineName": "lorry",
    "make": "2018",
    "serialNumber": "546yhgt9uy2",
    "modelNumber": "h343h8743h09j",
    "installedDate": "2019-06-02T16:59:51",
    "warrantyExpiry": "2021-12-25T10:30:50",
    "isActive": true,
    "location": "india",
    "powerRating": "1",
    "supplier": "TATA",
    "category": 2,
    "criticality": 2
  }
];