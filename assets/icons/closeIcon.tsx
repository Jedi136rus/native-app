import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CloseIcon = () => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 50 50"
  >
    <Path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m7 7 36 36M43 7 7 43"
    />
  </Svg>
)
export default CloseIcon