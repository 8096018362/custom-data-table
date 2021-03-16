import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';

@Component({
    selector: 'rmdatatable',
    templateUrl: './data-table.html',
    styleUrls: ['./data-table.css']
})
export class TableComponent {

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
            searchType: 'lessthan'
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

    openSearchFields(columnObj: any) {
        this.selname = "";
        this.selectedSearchObj = columnObj;
        this.selfieldType = columnObj.searchFieldType;
        this.searchArray = columnObj.searchFieldType === 'text' ? this.searchArrayType2 : this.searchArrayType1
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
        if ( this.sampleResponse.displayHeader[index].show) {
            //  this.sampleResponse.displayHeader[index].show = false;
            // var index = this.displayedColumns.findIndex((item: any) => item.name ===  this.sampleResponse.displayHeader[index].name);
            // this.displayedColumns.splice(index, 1);


            this.sampleResponse.displayHeader[index].show = false;
            this.displayedColumns.splice(index, 1);

        } else {
            this.sampleResponse.displayHeader[index].show = true;
            this.displayedColumns.push( this.sampleResponse.displayHeader[index].name)
        }

    }

    selectedSearchType(sObj: any) {
        this.selname = sObj.searchType;
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

                case 'lessthan':
                    dataSource.map((itm: any) => {
                        if (moment(itm[mainKey]).format('YYYY-MM-DD') < moment(this.wholeDate).format('YYYY-MM-DD')) {
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

        this.dataSource.data = this.sampleResponse.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.selname = "";
        this.selfieldType = "";
    }
}