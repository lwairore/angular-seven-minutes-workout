import { FormControl } from '@angular/forms';

export class ImageExtensionValidator {
    static invalidImageExtension(control: FormControl): { [key: string]: boolean } {
        if (control.value.length) {

            const validExtensions = ['jpg', 'jpeg', 'png']
            let splitURL = control.value.split('.');
            let inputImageURLExtension = splitURL[splitURL.length - 1];
            let extensionIsValid = validExtensions.find(
                extension => extension === inputImageURLExtension.toLowerCase());
            if (!extensionIsValid) { return { invalidImageExtension: true } }

        }
        return null;
    }
}