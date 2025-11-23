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

export const GrTextWrap = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="none" stroke="#000" strokeWidth={2} d="M17 10h7-7ZM1 14h13V2H1zm5-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m11 0h7-7Zm0-4h7-7Zm0 12h7-7ZM0 18h24H0Zm0 4h24H0Zm14-8v-1l-4-5-3 3-1-1-4 4z" />
      </G>
    </Svg>
  );
};