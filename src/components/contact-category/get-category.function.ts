export function get_contact_category(category: string)
{
    switch (category.toLowerCase())
    {
        case ('owner'):
            return { contact_category: 'owner', contact_type: 'Owner' };
        
        case ('driver'):
            return { contact_category: 'driver', contact_type: 'Driver' };
        
        case ('carrier'):
            return { contact_category: 'carrier', contact_type: 'Carrier' };

        case ('facility'):
            return { contact_category: 'facility', contact_type: 'Facility' };
        
        default:
            return { contact_category: 'other', contact_type: 'Other' };
    }
}