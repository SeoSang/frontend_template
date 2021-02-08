import { atom, useRecoilValue } from "recoil"

export const paleteState = atom({
  key: "paleteState",
  default: {
    primary: "#a4ebf3",
    secondary: "#e36bae",
  },
})
