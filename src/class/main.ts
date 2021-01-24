import { ValidatorAdapterClass } from '../adapter/validator'
import { CalculatePrevisionClass } from '../utils/calculatePrevision'
const MESSAGE_ERROR = "The number must be greater than zero"
export class Main{

    private readonly Days: number
    private readonly ValidatorAdapter: ValidatorAdapterClass
    private readonly calculatePrevisionClass: CalculatePrevisionClass

    constructor(days: number, validatorAdapter: ValidatorAdapterClass, calculatePrevisionClass: CalculatePrevisionClass){
        this.Days = days
        this.ValidatorAdapter = validatorAdapter
        this.calculatePrevisionClass = calculatePrevisionClass
    }


    prevision(){
        if(this.ValidatorAdapter.isvalid(this.Days))
            this.calcPrevision()
        else
            console.log(MESSAGE_ERROR)
    }

    calcPrevision(){
        const lsResponse = []
        for (let index = 1; index <= this.Days; index++) {
            // lsResponse.push(this.calculatePrevisionClass.calculate(index))
            console.log(this.calculatePrevisionClass.calculate(index))
        }
        // console.log(lsResponse)
    }

}