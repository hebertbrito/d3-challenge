import { assert, expect, should } from 'chai'
import { CalculatePrevisionClass } from './calculatePrevision'
describe("Testing unit CalculatePrevisionClass", ()=>{

    const stub = new CalculatePrevisionClass();

    it("Should return type string",()=>{
        const value = stub.calculate(1)
        assert.typeOf(value, "string")
    })
})