import { FormControl } from '@angular/forms';

export class URLCheckerWithOrWithoutHttpHttps {
    static invalidURL(control: FormControl): { [key: string]: boolean } {
        if (control.value.length) {
            if (!control.value.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm)) {
                return { invalidURL: true }
            }
        }
        return null;
    }
}