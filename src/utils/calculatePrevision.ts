import { CalculatePrevision } from '../models/calculate-prevision'

export class CalculatePrevisionClass implements CalculatePrevision {
    calculate(value: number): string {
        const calc = Math.floor(Math.random() * (new Date().getDate())) + 24
        const response = `${value} -> ${calc}`
        return response
    }
}