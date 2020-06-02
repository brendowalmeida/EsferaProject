import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

    private api: string;
    private uri: string;

    constructor(private http: HttpClient) {
        this.uri = '/users';

        this.api = environment.urlApi;
    }

    groupByCompany(allUsers: any) {
        return allUsers.reduce((object, actual, index, array) => {
        const idtf = actual.company.name;
        if (!object[idtf]) {
            object[idtf] = array.filter(item => item.company.name === idtf);
        }
        return object;
        }, {});
    } 

    getUsers() {
        return this.http.get<any>(this.api + this.uri).pipe(
            map((response: any) => this.groupByCompany(response)),
        );
    }  
}

