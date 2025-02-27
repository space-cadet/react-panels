"use client"

import { useState } from "react"
import Panel from "./Panel"

interface PanelData {
  id: number
  title: string
  content: string
  position: { x: number; y: number }
}

export default function PanelContainer() {
  const [panels, setPanels] = useState<PanelData[]>([
    { id: 1, title: "Panel 1", content: "This is the content of Panel 1", position: { x: 20, y: 20 } },
    { id: 2, title: "Panel 2", content: "This is the content of Panel 2", position: { x: 340, y: 20 } },
  ])

  const addPanel = () => {
    const newId = panels.length + 1
    setPanels([
      ...panels,
      {
        id: newId,
        title: `Panel ${newId}`,
        content: `This is the content of Panel ${newId}`,
        position: {
          x: 20 + (((newId - 1) * 320) % (window.innerWidth - 340)),
          y: 20 + Math.floor(((newId - 1) * 320) / (window.innerWidth - 340)) * 220,
        },
      },
    ])
  }

  const removePanel = (id: number) => {
    setPanels(panels.filter((panel) => panel.id !== id))
  }

  return (
    <div className="fixed inset-0 pointer-events-none">
      <button
        onClick={addPanel}
        className="fixed top-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm transition-colors pointer-events-auto"
      >
        Add Panel
      </button>
      {panels.map((panel) => (
        <div key={panel.id} className="pointer-events-auto">
          <Panel title={panel.title} onClose={() => removePanel(panel.id)} initialPosition={panel.position}>
            <p className="text-gray-600">{panel.content}</p>
          </Panel>
        </div>
      ))}
    </div>
  )
}

