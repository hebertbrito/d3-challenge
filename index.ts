import { Main } from './src/class/main'
import { ValidatorAdapterClass } from './src/adapter/validator'
import { CalculatePrevisionClass } from './src/utils/calculatePrevision'

let validatorAdapterClass = new ValidatorAdapterClass();
let calculatePrevisionClass = new CalculatePrevisionClass()
let Principal = new Main(-1, validatorAdapterClass, calculatePrevisionClass)

Principal.prevision()