export type Address = {
    countryCode: string
    postalCode: string
    addressLocality: string
}

export type Location = {
    address?: Address
}

export type Status = {
    timestamp: string
    location?: Location
    statusCode: string
    status: string
    description: string
}

export type ProductDetails = {
    productName: string
}

export type Weight = {
    value: number
    unitText: string
}

export type Reference = {
    number: string
    type: string
}

export type ShipmentDetails = {
    product: ProductDetails
    weight: Weight
    references: Reference[]
}

export type Event = {
    timestamp: string
    location?: Location
    statusCode: string
    status: string
}

export type Shipment = {
    id: string
    service: string
    origin: {
        address: Address
    }
    destination: {
        address: Address
    }
    status: Status
    details?: ShipmentDetails
    events?: Event[]
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
