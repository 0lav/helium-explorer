type Coordinates = [number, number] // [lng, lat]

export const MIN_MAP_ZOOM = 2

const WORLD_BOUNDS: [Coordinates, Coordinates] = [
  [-134.827109, 57.785781],
  [129.767893, -30.955724],
]

export const INITIAL_MAP_VIEW_STATE = {
  bounds: WORLD_BOUNDS,
}

export const MAP_CONTAINER_STYLE: React.CSSProperties = {
  height: "100%",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgb(19,24,37)",
}
