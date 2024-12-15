type Address = {
    countryCode: string
    postalCode: string
    addressLocality: string
}

type Location = {
    address?: Address
}

type Status = {
    timestamp: string
    location?: Location
    statusCode: string
    status: string
}

type ProductDetails = {
    productName: string
}

type Weight = {
    value: number
    unitText: string
}

type Reference = {
    number: string
    type: string
}

type ShipmentDetails = {
    product: ProductDetails
    weight: Weight
    references: Reference[]
}

type Event = {
    timestamp: string
    location?: Location
    statusCode: string
    status: string
}

type Shipment = {
    id: string
    service: string
    origin: {
        address: Address
    }
    destination: {
        address: Address
    }
    status: Status
    details: ShipmentDetails
    events: Event[]
}

export type TrackingResponse = {
    url: string
    firstUrl: string
    prevUrl: string
    nextUrl: string
    lastUrl: string
    shipments: Shipment[]
    possibleAdditionalShipmentsUrl: string[]
}
