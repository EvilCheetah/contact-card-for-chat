import { ICompanyName } from "./company-name.interface";
import { IContactCategory } from "./contact-category.interface";
import { IPersonName } from "./person-name.interface";
import { IPhoneNumber } from "./phone-number.interface";
import { IUnitNumber } from "./unit-number.interface";


export interface ContactInformation 
extends 
    IContactCategory,
    IPersonName,
    IPhoneNumber,
    IUnitNumber,
    ICompanyName
{}