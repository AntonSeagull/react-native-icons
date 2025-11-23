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

export const CgKey = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M6 8a3 3 0 0 0-3 3v2a3 3 0 1 0 6 0h6v2h2v-2h1v2h2v-4H9a3 3 0 0 0-3-3m1 5v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};