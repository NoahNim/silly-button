import { Client, Environment, LocationsApi, ApiError } from "square";

export const client = new Client({
    environment: Environment.Sandbox,
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

const { locationsApi } = client;

export async function getLocations() {
    try {
        let listLocationsResponse = await locationsApi.listLocations();

        let locations = listLocationsResponse.result.locations;

        locations?.forEach(function (location) {
            console.log(
                location.id + ": " +
                location.name + ", " +
                location?.address?.addressLine1 + ", " +
                location?.address?.locality
            );
        });
    } catch (error) {
        if (error instanceof ApiError) {
            error?.result?.errors.forEach(function (e: any) {
                console.log(e.category);
                console.log(e.code);
                console.log(e.detail);
            });
        } else {
            console.log("Unexpected error occurred: ", error);
        }
    }
};