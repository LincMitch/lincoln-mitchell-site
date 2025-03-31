import { Loader2 } from "lucide-react"

export default function CheckoutLoading() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] py-12">
      <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
      <h2 className="text-2xl font-bold">Loading Payment Form...</h2>
    </div>
  )
}

