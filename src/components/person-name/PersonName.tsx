import './PersonName.css';
import { IPersonName } from "../../interface/person-name.interface";


export function PersonName({ full_name }: IPersonName)
{
    return (
        <span className="person-name">
            { full_name }
        </span>
    );
}