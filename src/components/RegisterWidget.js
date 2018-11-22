import React from 'react';
import ReactDom from 'react-dom';
import Component from 'mson-react/lib/component';

const definition = {
    component: "Form",
    fields: [
        {
            name: "heading",
            component: "Text",
            text: "Register"
        },
        {
            name: "fullName",
            component: "PersonFullNameField",
            required: true
        },
        {
            name: "birthday",
            component: "DateField",
            label: "Birthday",
            required: true
          },
          {
            name: "phone",
            component: "PhoneField",
            label: "Phone"
          },
          {
            name: "submit",
            component: "ButtonField",
            label: "Submit",
            type: "submit",
            icon: "Send"
          }
    ]
    
}