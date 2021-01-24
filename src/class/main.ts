import { ValidatorAdapterClass } from '../adapter/validator'
import { CalculatePrevisionClass } from '../utils/calculatePrevision'
export class Main{

    private readonly Days: number
    private readonly ValidatorAdapter: ValidatorAdapterClass

    constructor(days: number, validatorAdapter: ValidatorAdapterClass){
        this.Days = days
        this.ValidatorAdapter = validatorAdapter
    }


    prevision(){
        if(this.ValidatorAdapter.isvalid(this.Days)){
            console.log(true)
        }
    }

    

}