import { Control, ControlGroup } from 'angular2/common';

export class CustomValidators{
    
    static emailFormat(control: Control){
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(control.value != "" && !EMAIL_REGEXP.test(control.value)){
            return {"emailFormatError": true};
        }

        return null;
    }
}