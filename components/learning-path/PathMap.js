'use client'

import React from 'react'
import NodeOctagon from './NodeOctagon'

/**
 * PathMap Component
 * Orchestrates the zig-zag layout of learning nodes.
 * @param {Array} nodes - Array of node objects { id, status, label, type }
 * @param {function} onNodeClick - Handler for node clicks
 */
export default function PathMap({ nodes = [], onNodeClick }) {
  
  // Logic to determine position based on index
  // 0: right, 1: left, 2: right, 3: left...
  // except for boss nodes which are usually centered
  const getPosition = (index, type) => {
    if (type === 'boss') return 'center'
    return index % 2 === 0 ? 'right' : 'left'
  }

  return (
    <div className="relative flex flex-col items-center gap-20 py-10 w-full max-w-md mx-auto">
      {/* Background SVG Path */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        {nodes.map((node, i) => {
          if (i === nodes.length - 1) return null
          
          const isCurrentCompleted = node.status === 'completed' || node.status === 'perfect'
          const nextNode = nodes[i + 1]
          
          // Simple Bezier Curve logic for the SVG path
          // This is a simplified visual representation
          const startX = getPosition(i, node.type) === 'right' ? '60%' : '40%'
          const endX = getPosition(i+1, nextNode.type) === 'right' ? '60%' : '40%'
          const controlPointX = i % 2 === 0 ? '80%' : '20%'
          
          const y1 = i * 160 + 50
          const y2 = (i + 1) * 160 + 50
          const midY = (y1 + y2) / 2

          return (
            <path
              key={`path-${i}`}
              d={`M 200 ${y1} Q ${i % 2 === 0 ? 300 : 100} ${midY} 200 ${y2}`}
              fill="none"
              stroke={isCurrentCompleted ? (node.status === 'perfect' ? '#fbbf24' : '#c3ffcd') : '#262626'}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={isCurrentCompleted ? "0" : "8 8"}
              className="transition-all duration-1000"
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <NodeOctagon
          key={node.id || index}
          status={node.status}
          label={node.label}
          position={getPosition(index, node.type)}
          onClick={() => onNodeClick?.(node)}
        />
      ))}
    </div>
  )
}
