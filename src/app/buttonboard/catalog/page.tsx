import { client } from "@/app/utils/square-auth"

const uploadCatalog = async () => {
    try {
        const response = client.catalogApi.batchUpsertCatalogObjects({
            idempotencyKey: crypto.randomUUID(),
            batches: [
                {
                    objects: [
                        {
                            type: 'ITEM',
                            id: '#Tea',
                            presentAtAllLocations: true,
                            itemData: {
                                name: 'Tea',
                                description: 'Hot Leaf Juice',
                                categoryId: '#Beverages',
                                taxIds: [
                                    '#SalesTax'
                                ],
                                variations: [
                                    {
                                        type: 'ITEM_VARIATION',
                                        id: '#Tea_Mug',
                                        presentAtAllLocations: true,
                                        itemVariationData: {
                                            itemId: '#Tea',
                                            name: 'Mug',
                                            pricingType: 'FIXED_PRICING',
                                            priceMoney: {
                                                amount: BigInt(150),
                                                currency: 'USD'
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            type: 'ITEM',
                            id: '#Coffee',
                            presentAtAllLocations: true,
                            itemData: {
                                name: 'Coffee',
                                description: 'Hot Bean Juice',
                                categoryId: '#Beverages',
                                taxIds: [
                                    '#SalesTax'
                                ],
                                variations: [
                                    {
                                        type: 'ITEM_VARIATION',
                                        id: '#Coffee_Regular',
                                        presentAtAllLocations: true,
                                        itemVariationData: {
                                            itemId: '#Coffee',
                                            name: 'Regular',
                                            pricingType: 'FIXED_PRICING',
                                            priceMoney: {
                                                amount: BigInt(250),
                                                currency: 'USD'
                                            }
                                        }
                                    },
                                    {
                                        type: 'ITEM_VARIATION',
                                        id: '#Coffee_Large',
                                        presentAtAllLocations: true,
                                        itemVariationData: {
                                            itemId: '#Coffee',
                                            name: 'Large',
                                            pricingType: 'FIXED_PRICING',
                                            priceMoney: {
                                                amount: BigInt(350),
                                                currency: 'USD'
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            type: 'CATEGORY',
                            id: '#Beverages',
                            presentAtAllLocations: true,
                            categoryData: {
                                name: 'Beverages'
                            }
                        },
                        {
                            type: 'TAX',
                            id: '#SalesTax',
                            presentAtAllLocations: true,
                            taxData: {
                                name: 'Sales Tax',
                                calculationPhase: 'TAX_SUBTOTAL_PHASE',
                                inclusionType: 'ADDITIVE',
                                percentage: '5.0',
                                appliesToCustomAmounts: true,
                                enabled: true
                            }
                        },
                        { type: 'ITEM', id: '#Juice', presentAtAllLocations: true, itemData: { name: 'Juice', description: 'Fruit Extract', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Juice_Glass', presentAtAllLocations: true, itemVariationData: { itemId: '#Juice', name: 'Glass', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(100), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Soda', presentAtAllLocations: true, itemData: { name: 'Soda', description: 'Carbonated Drink', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Soda_Can', presentAtAllLocations: true, itemVariationData: { itemId: '#Soda', name: 'Can', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(120), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Water', presentAtAllLocations: true, itemData: { name: 'Water', description: 'Natural Spring', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Water_Bottle', presentAtAllLocations: true, itemVariationData: { itemId: '#Water', name: 'Bottle', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(80), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Milk', presentAtAllLocations: true, itemData: { name: 'Milk', description: 'Dairy Beverage', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Milk_Bottle', presentAtAllLocations: true, itemVariationData: { itemId: '#Milk', name: 'Bottle', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(140), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Lemonade', presentAtAllLocations: true, itemData: { name: 'Lemonade', description: 'Citrus Drink', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Lemonade_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Lemonade', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(130), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Smoothie', presentAtAllLocations: true, itemData: { name: 'Smoothie', description: 'Blended Fruits', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Smoothie_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Smoothie', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(170), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Latte', presentAtAllLocations: true, itemData: { name: 'Latte', description: 'Espresso with Milk', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Latte_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Latte', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(220), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Cappuccino', presentAtAllLocations: true, itemData: { name: 'Cappuccino', description: 'Espresso with Foam', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Cappuccino_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Cappuccino', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(210), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Espresso', presentAtAllLocations: true, itemData: { name: 'Espresso', description: 'Concentrated Coffee', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Espresso_Shot', presentAtAllLocations: true, itemVariationData: { itemId: '#Espresso', name: 'Shot', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(180), currency: 'USD' } } }] } },
                        { type: 'ITEM', id: '#Mocha', presentAtAllLocations: true, itemData: { name: 'Mocha', description: 'Chocolate Espresso', categoryId: '#Beverages', taxIds: ['#SalesTax'], variations: [{ type: 'ITEM_VARIATION', id: '#Mocha_Cup', presentAtAllLocations: true, itemVariationData: { itemId: '#Mocha', name: 'Cup', pricingType: 'FIXED_PRICING', priceMoney: { amount: BigInt(230), currency: 'USD' } } }] } },
                    ]
                },

            ]
        })

        console.log((await response).result)
    } catch (e) {
        console.log(e)
    }
}

export default function Page() {

    // const catalogPostFunction = () => {
    //     uploadCatalog()
    // }

    uploadCatalog()

    return (
        <div>
            <h1>Catalog Data will go here</h1>
            {/* <button onClick={catalogPostFunction}>Make Cataalog</button> */}
        </div>

    )
}