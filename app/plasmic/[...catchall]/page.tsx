import { PLASMIC } from "@/plasmic-init"
import { PlasmicComponent } from "@plasmicapp/loader-nextjs"
import { notFound } from "next/navigation"

export default async function PlasmicLoaderPage({
  params,
}: {
  params: { catchall: string[] }
}) {
  const plasmicPath = "/" + (params.catchall?.join("/") || "")

  try {
    const plasmicData = await PLASMIC.fetchComponentData(plasmicPath)

    if (!plasmicData) {
      notFound()
    }

    return <PlasmicComponent component={plasmicData.entryCompMeta.name} />
  } catch (error) {
    console.error("Error fetching Plasmic component:", error)
    notFound()
  }
}

