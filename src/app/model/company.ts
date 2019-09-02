import { Validate, IsNotEmpty } from 'class-validator'
import { plainToClassFromExist } from 'class-transformer'
import { TextLengthMore15 } from '../utils/custom-validators';

export class Company {
    id: number = undefined;
    @Validate(TextLengthMore15, {
        message: 'The company name must be longer than 15'
    })
    @IsNotEmpty()
    name: string = undefined;

    constructor(data?: any) {
        plainToClassFromExist(this, data)
    }
}
