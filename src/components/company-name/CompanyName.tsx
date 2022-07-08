import './CompanyName.css';
import { ICompanyName } from "../../interface/company-name.interface";


export function CompanyName({ company_name }: ICompanyName)
{
    return (
        <div className='company-name'>{ company_name }</div>
    )
}