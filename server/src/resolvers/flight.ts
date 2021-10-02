import { Arg, Int, Query, Resolver } from "type-graphql";
import { Flight } from "../entities/Flight";

@Resolver(Flight)
export class FlightResolver {
    @Query(() => FlightResolver, { nullable: true })
    async flight(
        @Arg("id", () => Int) id: number
    ): Promise<Flight | undefined> {
        return Flight.findOne(id, { relations: ["flier"] });
    }
}
