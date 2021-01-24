import { ValidatorAdapter } from '../models/validator-adapter'

export class ValidatorAdapterClass implements ValidatorAdapter {

    isvalid(days: number) {
        if (days > 0) {
            return true
        }
        return false
    }
}