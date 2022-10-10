import { AbstractControl, AbstractControlOptions, ValidationErrors, Validators as v } from "@angular/forms";

export const login_Form = {
    loginEmail: [,[v.required, v.maxLength(90)]],
    loginPassword: [,[v.required, v.maxLength(90)]],
    loginRememberMe: [],
}

