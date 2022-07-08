import './ContactCategory.css'
import { IContactCategory } from "../../interface/contact-category.interface";
import { get_contact_category } from './get-category.function';


export function ContactCategory({ category }: IContactCategory )
{
    const { contact_category, contact_type} = get_contact_category(category)

    return (
        <span className={ `contact-category ${contact_category}` }>
            { contact_type }
        </span>
    );
}