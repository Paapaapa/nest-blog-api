"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const test_model_1 = require("./test.model");
class testCreateDto {
}
__decorate([
    swagger_1.ApiProperty({ enum: ['标题'] }),
    class_validator_1.IsNotEmpty({ message: '请填写标题' }),
    __metadata("design:type", String)
], testCreateDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ enum: ['详情'] }),
    class_validator_1.IsNotEmpty({ message: '请填写详情' }),
    __metadata("design:type", String)
], testCreateDto.prototype, "content", void 0);
let TestController = class TestController {
    constructor(testModel) {
        this.testModel = testModel;
    }
    async list() {
        return await this.testModel.find();
    }
    async create(body) {
        await this.testModel.create(body);
        return {
            success: true,
        };
    }
    async detail(id) {
        return await this.testModel.findById(id);
    }
    async update(id, body) {
        await this.testModel.findByIdAndUpdate(id, body);
        return {
            success: true,
        };
    }
    async remove(id) {
        return await this.testModel.findByIdAndRemove(id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: '列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestController.prototype, "list", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '创建' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [testCreateDto]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ summary: '详情' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "detail", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOperation({ summary: '编辑' }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, testCreateDto]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ summary: '删除' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "remove", null);
TestController = __decorate([
    common_1.Controller('test'),
    swagger_1.ApiTags('test'),
    __param(0, nestjs_typegoose_1.InjectModel(test_model_1.Test)),
    __metadata("design:paramtypes", [Object])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=test.controller.js.map