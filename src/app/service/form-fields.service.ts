import { Injectable } from '@angular/core';
import { FormModel } from '../interface/form.model'

@Injectable()
export class FormFieldsService {

  constructor() { }
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions:FormModel<any>[] = [  
      {  
         "value":"Solid",
         "key":"Solid",
         "label":"Select state",
         "required":false,
         "controlType":"dropdown",
         "options":[  
            {  
               "key":"solid",
               "value":"Solid"
            },
            {  
               "key":"great",
               "value":"Great"
            },
            {  
               "key":"good",
               "value":"Good"
            },
            {  
               "key":"unproven",
               "value":"Unproven"
            }
         ]
      },
      {  
         "key":"brave",
         "label":"Bravery Rating",
         "required":false,
         "controlType":"dropdown",
         "options":[  
            {  
               "key":"solid",
               "value":"Solid"
            },
            {  
               "key":"great",
               "value":"Great"
            },
            {  
               "key":"good",
               "value":"Good"
            },
            {  
               "key":"unproven",
               "value":"Unproven"
            }
         ]
      },
      {  
         "value":"Bombasto",
         "key":"firstName",
         "label":"First name",
         "required":true,
         "controlType":"textbox",
         "type":"text"
      },
      {  
         "key":"emailAddress",
         "label":"Email",
         "required":false,
         "controlType":"textbox",
         "type":"email"
      },
      {  
        "key":"id",
        "label":"Passport",
        "required":false,
        "controlType":"textbox",
        "type":"file"
     },
      {  
        "key":"gender",
        "label":"Gender",
        "required":false,
        "controlType":"radio",
        "type":"radio",
        "options":[  
          {  
             "key":"male1",
             "value":"Male"
          },
          {  
             "key":"female1",
             "value":"Female"
          },
          {  
             "key":"third1",
             "value":"Third Gender"
          }
       ]
     },
     {  
       "key":"message",
       "label":"Message",
       "required":false,
       "controlType":"textarea",
       "type":"textarea"
    }
   ]
    return questions;
  }
}
