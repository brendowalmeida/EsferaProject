import { Address } from 'src/app/shared/models/address.model';
import { Company } from 'src/app/shared/models/company.model';

export class Users {
    address: Address
    companu: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}