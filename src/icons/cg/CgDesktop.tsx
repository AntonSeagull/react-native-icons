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

export const CgDesktop = (props: IconProps) => {
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
        <Path fill="currentColor" d="M8 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0M16 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        <Path fill="currentColor" fillRule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v1h18V6a1 1 0 0 0-1-1M3 18V9h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};