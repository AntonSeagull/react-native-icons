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

export const FcPanorama = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#F57C00" d="M4 9v32s8.4-3 20-3 20 3 20 3V9s-6.7 3-20 3S4 9 4 9" />
        <Path fill="#942A09" d="M24 34h.4L15 19 6.9 36.2c3.4-.9 9.6-2.2 17.1-2.2" />
        <Path fill="#BF360C" d="M24 34q4.95 0 9 .6l-8-11.8-7.8 11.5c2.1-.2 4.4-.3 6.8-.3" />
        <Path fill="#E65100" d="M40.7 36 35 26.5l-5 7.8c4.5.4 8.2 1.1 10.7 1.7" />
        <Ellipse cx={36} cy={19.5} fill="#FFF9C4" rx={2} ry={2.5} />
      </G>
    </Svg>
  );
};