export enum MSG_TYPES {
  JOIN_GAME = "join_game",
  GAME_UPDATE = "game_update",
  INPUT = "input",
  GAME_OVER = "game_over",
  MESSAGE = "message",
  AVL_LOBBIES = "available_lobbies",
  CREATE_PLAYER = "create_player",
  NEW_PLAYER_JOINED = "new_player",
  PLAYER_LIST = "player_list"
}
export enum EFFECT_TYPES {
  DAMAGED = "damaged",
}
export enum INTERACTIONS_TYPES {
  MOVEMENT = "movement",
  MOUSE_CLICK = "mouse_click",
  SELECT = "select",
}
export enum SPELL_TYPES {
  FIREBALL = "fireball",
  MANA_BULLET = "mana_bullet",
}
export enum SHAPES_TYPES {
  CIRCLE = "circle",
  RECTANGLE = "rectangle",
  TRIANGLE = "triangle",
  LINE = "line",
}
export type EVENT =
  | MSG_TYPES
  | INTERACTIONS_TYPES
  | SPELL_TYPES
  | SHAPES_TYPES
  | EFFECT_TYPES;
