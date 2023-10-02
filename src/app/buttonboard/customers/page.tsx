import { client } from "@/app/utils/square-auth"
import { customersCreationData } from "@/app/utils/customer-data-array"

const seedSquareCustomersAPI = async () => {
    try {

        customersCreationData.forEach(async customer => {

            setTimeout(async () => {
                const response = await client.customersApi.createCustomer(customer)

                console.log(response.result)
            }, 8000)
        }
        )
    } catch (error) {
        console.log(error)
    }
}

const listSquareCustomersAddToLoyalty = async () => {
    try {
        const response = await client.customersApi.listCustomers();

        console.log(response.result)
    } catch (error) {
        console.log(error)
    }
}


export default function Page() {
    // seedSquareCustomersAPI();
    listSquareCustomersAddToLoyalty();

    return (
        <div>
            <h1>Catalog Data will go here</h1>

        </div>
    )
}