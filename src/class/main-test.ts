import { assert, expect } from 'chai'
import { Main } from './main'
import { ValidatorAdapterClass } from '../adapter/validator'
import { CalculatePrevisionClass } from '../utils/calculatePrevision'


describe("Testing unit Main", () => {

    let validatorAdapterClass = new ValidatorAdapterClass();
    let calculatePrevisionClass = new CalculatePrevisionClass()
    const stub = new Main(4, validatorAdapterClass, calculatePrevisionClass);

    it("Must be ans object",()=>{
        assert.typeOf(stub, "object")
    })

    /** Verify index.ts and Main class to execute this test
     * 
     * it("Should return error message",()=>{
        const main = new Main(-1, validatorAdapterClass, calculatePrevisionClass);
        expect(main.prevision()).to.be.a("string")
        })

        it("Should return type array",()=>{
        expect(stub.prevision()).to.be.an("array")
        })
     */
    
})