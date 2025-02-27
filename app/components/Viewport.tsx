"use client"

import dynamic from "next/dynamic"

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => (
    <div className="flex-grow flex items-center justify-center bg-gray-50">
      <div className="text-gray-500">Loading 3D viewport...</div>
    </div>
  ),
})

export default function Viewport() {
  return (
    <div className="flex-grow relative">
      <Scene />
    </div>
  )
}

