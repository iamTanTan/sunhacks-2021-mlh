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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightResolver = void 0;
const isAuth_1 = require("../middleware/isAuth");
const type_graphql_1 = require("type-graphql");
const Flight_1 = require("../entities/Flight");
let FlightResolver = class FlightResolver {
    Flight(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Flight_1.Flight.findOne(id, { relations: ["flier"] });
        });
    }
    submitFlightData(flightNumber, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.session;
            const flight = yield Flight_1.Flight.findOne({
                where: { flightNumber, userId },
            });
            if (!flight) {
                const flightDetails = yield fetch(`https://flight-engine-data.herokuapp.com/flights?date=2021-10-07&flightNumber=${flightNumber}`);
                console.log(flightDetails);
            }
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => Flight_1.Flight, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FlightResolver.prototype, "Flight", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input", () => String)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FlightResolver.prototype, "submitFlightData", null);
FlightResolver = __decorate([
    (0, type_graphql_1.Resolver)(Flight_1.Flight)
], FlightResolver);
exports.FlightResolver = FlightResolver;
//# sourceMappingURL=flight.js.map