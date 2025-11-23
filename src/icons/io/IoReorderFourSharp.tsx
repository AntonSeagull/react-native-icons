import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const IoReorderFourSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M102 304h308M102 208h308M102 112h308M102 400h308" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        strokeWidth: 44
        }} />
      </G>
    </Svg>
  );
};