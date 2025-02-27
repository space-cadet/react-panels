"use client"

import dynamic from "next/dynamic"
import PanelContainer from "./components/PanelContainer"

const Viewport = dynamic(() => import("./components/Viewport"), {
  ssr: false,
  loading: () => <div className="flex-grow bg-gray-50" />,
})

export default function Home() {
  return (
    <main className="relative flex h-screen overflow-hidden bg-gray-50">
      <Viewport />
      <PanelContainer />
    </main>
  )
}

