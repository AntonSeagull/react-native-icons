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

export const CgCalendarDates = (props: IconProps) => {
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
        <Path fill="currentColor" d="M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M8 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M16 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M16 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm12 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};