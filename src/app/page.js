import ShipmentsDetails from "./components/ShipmentDetails"
import SearchTrackingInput from "./components/SearchTrackingInput"


const APY_KEY =process.env.NEXT_PUBLIC_DHL_API_KEY
export default function Home() {

  console.log(process.env.DHL_API_KEY)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to the DHL API</h1>
      <ShipmentsDetails api_key={APY_KEY}/>
    </main>
  )
}
