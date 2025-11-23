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

export const CgDatabase = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5 9V7h2v2zM9 9h10V7H9zM5 15v2h2v-2zM19 17H9v-2h10z" />
        <Path fill="currentColor" fillRule="evenodd" d="M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v5H3V6a1 1 0 0 1 1-1m-1 8v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};