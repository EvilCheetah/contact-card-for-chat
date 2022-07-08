import './UnitNumber.css'
import { IUnitNumber } from "../../interface/unit-number.interface";


export function UnitNumber({ unit_number }: IUnitNumber)
{
    return (
        <span className="unit-number">
            { unit_number }
        </span>
    )
}