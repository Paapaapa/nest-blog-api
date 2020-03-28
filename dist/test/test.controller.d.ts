import { ReturnModelType } from "@typegoose/typegoose";
import { Test } from './test.model';
declare class testCreateDto {
    title: string;
    content: string;
}
export declare class TestController {
    private readonly testModel;
    constructor(testModel: ReturnModelType<typeof Test>);
    list(): Promise<import("@typegoose/typegoose").DocumentType<Test>[]>;
    create(body: testCreateDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("@typegoose/typegoose").DocumentType<Test>>;
    update(id: string, body: testCreateDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<import("@typegoose/typegoose").DocumentType<Test>>;
}
export {};
