import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={26}
    height={28}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 .641h25.234V27.36H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.0126 0 0 .0119 -.004 0)" />
      </Pattern>
      <Image
        xlinkHref="data:image/jpeg;base64,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"
        id="b"
        width={80}
        height={84}
      />
    </Defs>
  </Svg>
)
export default SvgComponent