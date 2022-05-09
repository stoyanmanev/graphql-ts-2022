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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = exports.Game = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
let Game = class Game {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], Game.prototype, "_id", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }) // mongodb
    ,
    (0, type_graphql_1.Field)() // graphql
    ,
    __metadata("design:type", String)
], Game.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "image", void 0);
Game = __decorate([
    (0, type_graphql_1.ObjectType)()
], Game);
exports.Game = Game;
exports.GameModel = (0, typegoose_1.getModelForClass)(Game);
