import { useEffect, useMemo, useState } from 'react'

export const GRID_COLS = 4
export const GRID_ROWS = 2
const DOT = 12

/** Measure one grid row in px (50svh) so overlay matches section heights. */
function measureCellHeight() {
  const el = document.createElement('div')
  el.style.cssText = 'position:absolute;visibility:hidden;height:50svh;pointer-events:none'
  document.body.appendChild(el)
  const h = el.offsetHeight
  el.remove()
  return h || window.innerHeight / GRID_ROWS
}

/**
 * Full-page absolute grid. Horizontal lines sit at fixed 50svh intervals
 * from the top so they align with section boundaries (not stretched %).
 */
export default function GridOverlay() {
  const [metrics, setMetrics] = useState({ rowCount: GRID_ROWS, cellH: 0, pageH: 0 })

  useEffect(() => {
    const page = document.querySelector('.page')
    if (!page) return

    const measure = () => {
      const cellH = measureCellHeight()
      const pageH = page.offsetHeight
      const rowCount = Math.max(GRID_ROWS, Math.ceil(pageH / cellH))
      setMetrics({ rowCount, cellH, pageH })
    }

    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(page)
    window.addEventListener('resize', measure)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { lines, dots } = useMemo(() => {
    const { rowCount, cellH, pageH } = metrics
    if (!cellH || !pageH) return { lines: [], dots: [] }

    const vertical = []
    const horizontal = []
    const intersections = []

    for (let i = 0; i <= GRID_COLS; i++) {
      const x = (i / GRID_COLS) * 100
      vertical.push(
        <line
          key={`v-${i}`}
          x1={`${x}%`}
          y1={0}
          x2={`${x}%`}
          y2={pageH}
          stroke="white"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />,
      )
    }

    for (let j = 0; j <= rowCount; j++) {
      const y = Math.min(j * cellH, pageH)
      horizontal.push(
        <line
          key={`h-${j}`}
          x1="0%"
          y1={y}
          x2="100%"
          y2={y}
          stroke="white"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />,
      )
    }

    for (let i = 0; i <= GRID_COLS; i++) {
      for (let j = 0; j <= rowCount; j++) {
        const x = (i / GRID_COLS) * 100
        const y = Math.min(j * cellH, pageH)
        intersections.push(
          <rect
            key={`d-${i}-${j}`}
            x={`${x}%`}
            y={y}
            width={DOT}
            height={DOT}
            fill="white"
            transform={`translate(${-DOT / 2}, ${-DOT / 2})`}
          />,
        )
      }
    }

    return { lines: [...vertical, ...horizontal], dots: intersections }
  }, [metrics])

  return (
    <div className="absolute inset-0 z-40 h-full pointer-events-none" aria-hidden="true">
      <svg
        className="block w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height={metrics.pageH || '100%'}
        style={{ height: metrics.pageH || '100%' }}
      >
        <g opacity="0.65">
          {lines}
          {dots}
        </g>
      </svg>
    </div>
  )
}
