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

export const CgSandClock = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13 6h-2v1a1 1 0 1 0 2 0z" />
        <Path fill="currentColor" fillRule="evenodd" d="M6 2v2h1v3a5 5 0 0 0 5 5 5 5 0 0 0-5 5v3H6v2h12v-2h-1v-3a5 5 0 0 0-5-5 5 5 0 0 0 5-5V4h1V2zm3 2h6v3a3 3 0 1 1-6 0zm0 13v3h6v-3a3 3 0 1 0-6 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};