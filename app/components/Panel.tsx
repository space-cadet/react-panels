"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { Resizable } from "re-resizable"
import { X, Minus, Square } from "lucide-react"

interface PanelProps {
  title: string
  onClose: () => void
  initialPosition: { x: number; y: number }
  children: React.ReactNode
}

export default function Panel({ title, onClose, initialPosition, children }: PanelProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState(initialPosition)
  const panelRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const panelHeight = isMinimized ? 40 : 200

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.closest(".panel-header")) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
      }
    },
    [isDragging, dragStart],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragStart, handleMouseMove, handleMouseUp])

  return (
    <div
      ref={panelRef}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 10 : 1,
      }}
      onMouseDown={handleMouseDown}
    >
      <Resizable
        defaultSize={{
          width: 300,
          height: panelHeight,
        }}
        minWidth={200}
        minHeight={40}
        maxWidth={800}
        maxHeight={600}
        enable={{
          top: false,
          right: true,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
          <div className="panel-header flex justify-between items-center bg-gray-50 px-4 py-2 cursor-move border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-700">{title}</h3>
            <div className="flex items-center space-x-2">
              <button onClick={toggleMinimize} className="p-1 hover:bg-gray-200 rounded-md transition-colors">
                {isMinimized ? <Square size={14} /> : <Minus size={14} />}
              </button>
              <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-md transition-colors">
                <X size={14} />
              </button>
            </div>
          </div>
          <div className={`p-4 flex-grow overflow-auto ${isMinimized ? 'hidden' : 'block'}`}>
            {children}
          </div>
        </div>
      </Resizable>
    </div>
  )
}
