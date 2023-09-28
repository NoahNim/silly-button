import { client } from "@/app/utils/square-auth"
import { customersCreationData } from "@/app/utils/customer-data-array"

const seedSquareCustomersAPI = async () => {
    try {
        customersCreationData.forEach(async customer => {
            const response = await client.customersApi.createCustomer(customer)

            console.log(response.result)
        }
        )
    } catch (error) {
        console.log(error)
    }
}


export default function Page() {
    seedSquareCustomersAPI();

    return (
        <div>
            <h1>Catalog Data will go here</h1>

        </div>
    )
}