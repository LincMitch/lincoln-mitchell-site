"use client"

import { PlasmicCanvasHost } from "@plasmicapp/host"
import { PLASMIC } from "../plasmic-init"

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />
}

