import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }


    public sampleResponse: any = {
        displayHeader: [{
            displayName: 'Teacher Id',
            name: 'id',
            defaultColumn: true,
            show: true,
            searchFieldType: 'number'
        },
        {
            displayName: 'Name',
            name: 'name',
            defaultColumn: true,
            show: true,
            searchFieldType: 'text'
        },
        {
            displayName: 'Teaching Subject',
            name: 'subject',
            defaultColumn: true,
            show: true,
            searchFieldType: 'text'
        },
        {
            displayName: 'Gendar',
            name: 'gendar',
            defaultColumn: false,
            show: false,
            searchFieldType: 'text'
        },
        {
            displayName: 'Joinging Date',
            name: 'joingingDate',
            defaultColumn: true,
            show: true,
            searchFieldType: 'date'
        },
        {
            displayName: 'DOB',
            name: 'dateOfbirth',
            defaultColumn: false,
            show: false,
            searchFieldType: 'date'
        },

        ],
        data: [
            {
                "id": 1,
                "name": "ramu",
                "class": 1,
                "subject":"Telugu",
                "gendar": "male",
                "joingingDate": "2019-06-02T16:59:10",
                "dateOfbirth": "2021-03-18T10:30:50"
            },
            {
                "id": 2,
                "name": "raju",
                "class": 2,
                "subject":"English",
                "gendar": "male",
                "joingingDate": "2019-06-03T16:59:10",
                "dateOfbirth": "2021-03-17T10:30:50"
            },
            {
                "id": 3,
                "name": "sukeerthi",
                "class": 2,
                "subject":"Mathematics",
                "gendar": "female",
                "joingingDate": "2019-06-04T16:59:10",
                "dateOfbirth": "2021-03-16T10:30:50"
            },
            {
                "id": 4,
                "name": "kiran",
                "class": 3,
                "subject":"Science",
                "gendar": "male",
                "joingingDate": "2019-06-02T16:59:10",
                "dateOfbirth": "2021-03-15T10:30:50"
            }
        ]
    }
}
