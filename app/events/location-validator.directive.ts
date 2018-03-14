import { Directive } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

@Directive({ selector: '[validateLocation]' })
export class LocationValidator implements Validator {
    constructor() { }

    validate(formGroup: FormGroup): {[key: string]: any } {
        let address = formGroup.controls['address']
        let city = formGroup.controls['city']
        let country = formGroup.controls['country']
        let onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if((address && address.value && city && city.value && country && country.value)
         || (onlineUrl && onlineUrl.value)) {
             return null
         } else {
             return {validateLocation: false}
         }
    }
}