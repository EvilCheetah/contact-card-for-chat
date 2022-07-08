import React from 'react';
import './ContactCard.css';

import { PersonName } from '../person-name/PersonName';
import { UnitNumber } from '../unit-number/UnitNumber';
import { PhoneNumber } from '../phone-number/PhoneNumber';
import { ContactCategory } from '../contact-category/ContactCategory';
import { ContactInformation } from '../../interface/contact-information.interface';
import { CompanyName } from '../company-name/CompanyName';


export function ContactCard({ contact }: { contact: ContactInformation })
{
  return (
    <div className="card">
        <div className="contact-card">
            <div className='contact-information'>
                { contact.unit_number && <UnitNumber unit_number={contact.unit_number} /> }
                <PersonName full_name={contact.full_name} />
                <ContactCategory category={contact.category} />
            </div>
            { contact.company_name && <CompanyName company_name={contact.company_name} /> }
            <PhoneNumber phone_number={contact.phone_number} />
        </div>
    </div>
  );
}
