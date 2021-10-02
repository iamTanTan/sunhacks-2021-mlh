import { isAuth } from "../middleware/isAuth";
import { MyContext } from "src/types";
import {
    Arg,
    Ctx,
    Int,
    Mutation,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { Flight } from "../entities/Flight";

@Resolver(Flight)
export class FlightResolver {
    @Query(() => Flight, { nullable: true })
    async Flight(
        @Arg("id", () => Int) id: number
    ): Promise<Flight | undefined> {
        return Flight.findOne(id, { relations: ["flier"] });
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async submitFlightData(
        @Arg("input", () => String) flightNumber: string,
        @Ctx() { req }: MyContext
    ) {
        const { userId } = req.session;

        const flight = await Flight.findOne({
            where: { flightNumber, userId },
        });

        //new flight number submitted
        if (!flight) {
            //fetch data and then commit to database
            const flightDetails = await fetch(
                `https://flight-engine-data.herokuapp.com/flights?date=2021-10-07&flightNumber=${flightNumber}`
            );
            console.log(flightDetails);

            // await Flight.create({flightNumber: flightDetails[0].flightNumber, });
        }

        return true;
    }
}
