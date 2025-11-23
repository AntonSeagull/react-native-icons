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

export const FcElectricalThreshold = (props: IconProps) => {
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
        <Path fill="#80DEEA" d="M3 12h42v24H3z" />
        <Path fill="#03A9F4" d="M3 23h42v2H3z" />
        <Path fill="none" stroke="#3F51B5" strokeMiterlimit={10} strokeWidth={4} d="m4 18 4.5-1.5c.9-.3 1.9.1 2.3.9l8.7 14.3c.7 1.2 2.4 1.3 3.2.2l2.3-2.8c.5-.6 1.4-.9 2.2-.6l3 1c1 .3 2.1-.2 2.5-1.1L37 18.3c.5-1.1 1.9-1.6 2.9-.9l4 2.7" />
      </G>
    </Svg>
  );
};