import './PhoneNumber.css'
import { IPhoneNumber } from "../../interface/phone-number.interface";


export function PhoneNumber({ phone_number }: IPhoneNumber)
{
    return (
        <a 
            className="phone-number" 
            href={`tel:${phone_number}`}
        >
            { phone_number }
        </a>
    )
}