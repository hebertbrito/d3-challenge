import { Main } from './src/class/main'
import { ValidatorAdapterClass } from './src/adapter/validator'

let validatorAdapterClass = new ValidatorAdapterClass();
let Principal = new Main(10, validatorAdapterClass)

Principal.prevision()