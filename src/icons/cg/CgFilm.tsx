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

export const CgFilm = (props: IconProps) => {
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
        <Path fill="currentColor" d="M6 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2M17 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0M6 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2M17 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M6 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M17 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
        <Path fill="currentColor" fillRule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};