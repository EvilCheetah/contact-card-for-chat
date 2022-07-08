import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ContactCard } from './components/contact-card/ContactCard';
import reportWebVitals from './reportWebVitals';
import { contacts } from './contacts'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <>
        {
            contacts.map(
                (contact) =>
                {
                    return (
                        <ContactCard contact={contact} />
                    );
                }
            )
        }
        </>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
