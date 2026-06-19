export const ModalTypeEnum = {
  context: "context",
  events: "events",
  game: "game",
  landmark: "landmark",
  routes: "routes",
  additional: "additional",
} as const

export type ModalTypeEnum = (typeof ModalTypeEnum)[keyof typeof ModalTypeEnum];
