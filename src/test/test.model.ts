import { getModelForClass, prop } from '@typegoose/typegoose';

export class Test {
    @prop()
    title: string
    @prop()
    content: string
}

// export const testModel = getModelForClass(Test);