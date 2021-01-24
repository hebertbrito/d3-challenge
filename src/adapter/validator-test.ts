import { assert, expect } from 'chai'
import { ValidatorAdapterClass } from './validator'

describe("Testing unit Validator", ()=>{

    const stub = new ValidatorAdapterClass();

    it("Should return type boolean",()=>{
        const value = stub.isvalid(4)
        assert.typeOf(value, "boolean")
    })

    it("Should return value TRUE",()=>{
        const value = stub.isvalid(1)
        expect(value).to.equal(true)
    })

    it("Should return value FALSE",()=>{
        const value = stub.isvalid(-1)
        expect(value).to.equal(false)
    })
})