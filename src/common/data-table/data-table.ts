import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'rmdatatable',
    templateUrl: './data-table.html',
    styleUrls: ['./data-table.css']
})
export class TableComponent {


    public poForm: FormGroup;

    constructor(
        private readonly fb: FormBuilder
    ) {
        this.poForm = new FormGroup({
            'items': new FormArray([])
        });
        // this.onAddItem()
    }



    @Input() sampleResponse: any = {};

    searchInputToValue: any = '';
    searchInputFromValue: any = '';
    selname: any = '';
    selfieldType: any = '';
    title = 'table-angular';
    searchArray: any = [];
    searchArrayType1: any = [
        {
            searchType: 'wholeSearch'
        },
        {
            searchType: 'greterthan'
        },
        {
            searchType: 'greterthanorequal'
        },
        {
            searchType: 'lessthan'
        },
        {
            searchType: 'lessthanorequal'
        },
        {
            searchType: 'between'
        }
    ];

    searchArrayType2: any = [
        {
            searchType: 'wholeSearch'
        }
    ];

    selectedSearchObj: any;

    selectedColumns: any = [];
    defaultSearchType: any = '';
    openSearchFields(columnObj: any) {
        this.selname = "";
        this.selectedSearchObj = columnObj;
        this.selfieldType = columnObj.searchFieldType;
        this.searchArray = columnObj.searchFieldType === 'text' ? this.searchArrayType2 : this.searchArrayType1
        this.defaultSearchType = "wholeSearch";
        this.selname = "wholeSearch";
    }
    public searchInputValue: any = '';
    public campaignOne: any = {};
    public campaignTwo: any = {};

    displayedColumns: any = [];
    dataSource: any = new MatTableDataSource<any>([]);

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    @ViewChild(MatSort)
    sort!: MatSort;

    ngAfterViewInit() {
        this.sampleResponse.displayHeader.map((col: any) => {
            if (col.defaultColumn) {
                this.displayedColumns.push(col.name)
                this.selectedColumns.push(col.name)
            }
        });
        setTimeout(() => {
            this.dataSource.data = this.sampleResponse.data;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, 1000);
    }

    ngOnInit() {

    }

    columnOpearation(index: any) {
        this.selname = "";
        this.selfieldType = "";
        if (this.sampleResponse.displayHeader[index].show) {
            this.sampleResponse.displayHeader[index].show = false;
        } else {
            this.sampleResponse.displayHeader[index].show = true;
        }

        this.displayedColumns = [];
        this.sampleResponse.displayHeader.forEach((element: { show: any; name: any; }) => {
            if (element.show) {
                this.displayedColumns.push(element.name);
            }
        });

        window.scrollTo(0, 0)
    }

    selectedSearchType(sObj: any) {
        this.selname = sObj.searchType;
    }

    multiSelectedSearchType(sObj: any, index: any) {
        this.poForm.value.items[index].m_selSearchName = sObj.searchType;

    }


    wholeDate: any;
    startDate: any;
    endDate: any;

    finalArray: any = [];
    public fetchDataByFiltered() {

        this.finalArray = [];
        let mainKey = this.selectedSearchObj.name;
        let searchType = this.selname;

        let dataSource: any = this.sampleResponse.data;

        if (this.selfieldType == 'date') {
            switch (searchType) {

                case "wholeSearch":
                    dataSource.map((itm: any) => {
                        if (moment(itm[mainKey]).format('YYYY-MM-DD') == moment(this.wholeDate).format('YYYY-MM-DD')) {
                            this.finalArray.push(itm)
                        }
                    });
                    this.dataSet();
                    break;

                case 'greterthan':
                    dataSource.map((itm: any) => {
                        if (moment(itm[mainKey]).format('YYYY-MM-DD') > moment(this.wholeDate).format('YYYY-MM-DD')) {
                            this.finalArray.push(itm)
                        }
                    });
                    this.dataSet();
                    break;
                case 'greterthanorequal':
                    dataSource.map((itm: any) => {
                        if (moment(itm[mainKey]).format('YYYY-MM-DD') >= moment(this.wholeDate).format('YYYY-MM-DD')) {
                            this.finalArray.push(itm)
                        }
                    });
                    this.dataSet();
                    break;

                case 'lessthan':
                    dataSource.map((itm: any) => {
                        if (moment(itm[mainKey]).format('YYYY-MM-DD') < moment(this.wholeDate).format('YYYY-MM-DD')) {
                            this.finalArray.push(itm)
                        }
                    });
                    this.dataSet();
                    break;
                case 'lessthanorequal':
                    dataSource.map((itm: any) => {
                        if (moment(itm[mainKey]).format('YYYY-MM-DD') <= moment(this.wholeDate).format('YYYY-MM-DD')) {
                            this.finalArray.push(itm)
                        }
                    });
                    this.dataSet();
                    break;

                case 'between':
                    dataSource.map((itm: any) => {
                        if (moment(itm[mainKey]).format('YYYY-MM-DD') > moment(this.startDate).format('YYYY-MM-DD') && moment(itm[mainKey]).format('YYYY-MM-DD') < moment(this.endDate).format('YYYY-MM-DD')) {
                            this.finalArray.push(itm)
                        }
                    });
                    this.dataSet();
                    break;

            }

        } else {
            switch (searchType) {

                case "wholeSearch":
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
                case 'greterthanorequal':
                    dataSource.map((itm: any) => {
                        if (itm[mainKey] >= this.searchInputValue) {
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
                case 'lessthanorequal':
                    dataSource.map((itm: any) => {
                        if (itm[mainKey] <= this.searchInputValue) {
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
    }

    multiData: any;
    finalArrayFilter: any = [];
    fetchDataByMultiFiltered() {
        this.multiData = this.poForm.value.items;
        let dataSource: any = this.sampleResponse.data;

        this.multiData.forEach((element: { m_searchKey: any; m_selSearchName: any; m_searchFieldType: any; m_searchInputValue: any; }) => {
            this.finalArray = [];
            let mainKey = element.m_searchKey;
            let searchType = element.m_selSearchName;
            this.selfieldType = element.m_searchFieldType;
            this.searchInputValue = element.m_searchInputValue;

            if (this.selfieldType == 'date') {
                switch (searchType) {

                    case "wholeSearch":
                        dataSource.map((itm: any) => {
                            if (moment(itm[mainKey]).format('YYYY-MM-DD') == moment(this.wholeDate).format('YYYY-MM-DD')) {
                                this.finalArray.push(itm)
                            }
                        });
                        this.dataSet();
                        break;

                    case 'greterthan':
                        dataSource.map((itm: any) => {
                            if (moment(itm[mainKey]).format('YYYY-MM-DD') > moment(this.wholeDate).format('YYYY-MM-DD')) {
                                this.finalArray.push(itm)
                            }
                        });
                        this.dataSet();
                        break;
                    case 'greterthanorequal':
                        dataSource.map((itm: any) => {
                            if (moment(itm[mainKey]).format('YYYY-MM-DD') >= moment(this.wholeDate).format('YYYY-MM-DD')) {
                                this.finalArray.push(itm)
                            }
                        });
                        this.dataSet();
                        break;

                    case 'lessthan':
                        dataSource.map((itm: any) => {
                            if (moment(itm[mainKey]).format('YYYY-MM-DD') < moment(this.wholeDate).format('YYYY-MM-DD')) {
                                this.finalArray.push(itm)
                            }
                        });
                        this.dataSet();
                        break;
                    case 'lessthanorequal':
                        dataSource.map((itm: any) => {
                            if (moment(itm[mainKey]).format('YYYY-MM-DD') <= moment(this.wholeDate).format('YYYY-MM-DD')) {
                                this.finalArray.push(itm)
                            }
                        });
                        this.dataSet();
                        break;

                    case 'between':
                        dataSource.map((itm: any) => {
                            if (moment(itm[mainKey]).format('YYYY-MM-DD') > moment(this.startDate).format('YYYY-MM-DD') && moment(itm[mainKey]).format('YYYY-MM-DD') < moment(this.endDate).format('YYYY-MM-DD')) {
                                this.finalArray.push(itm)
                            }
                        });
                        this.dataSet();
                        break;

                }

            } else {
                switch (searchType) {

                    case "wholeSearch":
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
                    case 'greterthanorequal':
                        dataSource.map((itm: any) => {
                            if (itm[mainKey] >= this.searchInputValue) {
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
                    case 'lessthanorequal':
                        dataSource.map((itm: any) => {
                            if (itm[mainKey] <= this.searchInputValue) {
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

            dataSource = this.finalArray;
        });
    }

    dataSet() {
        setTimeout(() => {
            this.dataSource = new MatTableDataSource<any>(this.finalArray);
            setTimeout(() => {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, 500);
            window.scrollTo(0, 0)
        }, 2000);
    }

    resetTable() {

        this.dataSource.data = this.sampleResponse.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        window.scrollTo(0, 0)

        // this.selname = "";
        // this.selfieldType = "";

        this.searchInputFromValue = '';
        this.searchInputToValue = '';
        this.searchInputValue = '';
        this.startDate = '';
        this.endDate = '';
        this.wholeDate = '';
    }
    getControls() {
        return (this.poForm.get('items') as FormArray).controls;
    }

    addMultiFields(obj: any) {
        obj.searchOptions = obj.searchFieldType === 'text' ? this.searchArrayType2 : this.searchArrayType1;
        this.onAddItem(obj)
    }

    onAddItem(obj: any) {
        (this.poForm.get('items') as FormArray).push(this.createItem(obj));
    }
    createItem(obj: any) {
        return new FormGroup({
            'm_searchKey': new FormControl(obj.name ? obj.name : '', Validators.required),
            'm_displyKey': new FormControl(obj.displayName ? obj.displayName : '', Validators.required),
            'm_selSearchName': new FormControl("wholeSearch", Validators.required),
            'm_searchArray': new FormControl(obj.searchOptions),
            'm_searchFieldType': new FormControl(obj.searchFieldType),

            "m_searchInputValue": new FormControl(null, Validators.required),
            "m_searchInputFromValue": new FormControl(null, Validators.required),
            "m_searchInputToValue": new FormControl(null, Validators.required),
            "m_wholeDate": new FormControl(null, Validators.required),
            "m_startDate": new FormControl(null, Validators.required),
            "m_endDate": new FormControl(null, Validators.required),
        })
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }



}



// export class AddPOComponent {
//     ngOnInit() {
//         this.poForm = new FormGroup({
//             'poInfo': new FormGroup({
//                 'vendorName': new FormControl(null, Validators.required),
//                 'purchageNumber': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(30)])),
//             }),
//             'items': new FormArray([])
//         });
//         this.getAllVendors(); 

//     }


//     createItem() {
//         return new FormGroup({
//             'itemName': new FormControl(null, Validators.required),
//             'quantity': new FormControl(null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,4})$')]),
//             'skuCode': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(30)])),
//         })
//     }



//     itemDetails: any = [];
//     itemsAddStatus = false;
//     onAddItem() {
//         this.itemsAddStatus = true;
//         (this.poForm.get('items') as FormArray).push(this.createItem());
//     }

//     onDeleteItem(index) {
//         (this.poForm.get('items') as FormArray).removeAt(index);
//         if (this.poForm.get('items').value.length === 0) {
//             this.itemsAddStatus = false;
//         }
//     }

//     skuCodeErrorMsg;
//     getProductName(index) {
//         let skuCheckingStatus = true
//         const formObj: any = this.poForm.get('items') as FormArray;
//         formObj.controls[index].get('itemName').setValue('')
//         if (index) {
//             for (let i = 0; i < this.poForm.get('items').value.length; i++) {
//                 if (this.poForm.value.items[index].skuCode === this.poForm.value.items[i].skuCode && i !== index) {
//                     skuCheckingStatus = false;
//                     this.errorAlertMessages = "SKU Already exists";
//                     setTimeout(() => {
//                         this.errorAlertMessages = '';
//                         formObj.controls[index].get('skuCode').setValue('')
//                     }, 1000)
//                 }
//             }
//         }

//         if (skuCheckingStatus && this.poForm.value.items[index].skuCode) {
//             this.poService.getSKUdetails(this.poForm.value.items[index].skuCode).subscribe((data) => {
//                 if (data.data != null) {
//                     skuCheckingStatus = false;
//                     formObj.controls[index].get('itemName').setValue(data.data.inventory.productName)
//                     // formObj.controls[index].get('itemName').setValue('data.data.productName')
//                 } else {
//                     this.errorAlertMessages = data.error.message;
//                     setTimeout(() => {
//                         this.errorAlertMessages = '';
//                         formObj.controls[index].get('skuCode').setValue('')
//                     }, 1000)
//                 }
//             })
//         }




//     }
//     // getProductName(index) {
//     //     let formObj: any = <FormArray>this.poForm.get('items');
//     //     formObj.controls[index].get('itemName').setValue('')
//     //     this.poService.getSKUdetails(this.poForm.value.items[index].skuCode).subscribe((data) => {
//     //         if (data.data != null) {
//     //             formObj.controls[index].get('itemName').setValue(data.data.productName)
//     //         }
//     //     })
//     // }

//     addPo() {
//         this.submitted = false;
//         if (this.poForm.valid && this.poDate) {
//             if (this.itemsAddStatus) {
//                 const poObj = {
//                     "vendorId": {
//                         "id": this.poForm.value.poInfo.vendorName,
//                     },
//                     "purchaseOrderNumber": this.poForm.value.poInfo.purchageNumber,
//                     "commercialInvoiceDate": this.poDate["jsdate"],
//                     "comments": this.comments
//                 }
//                 this.addPoSubMethod(poObj)

//             } else {
//                 alert('please add item')
//             }
//         } else {
//             this.submitted = true;
//         }
//     }