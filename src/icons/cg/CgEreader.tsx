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

export const CgEreader = (props: IconProps) => {
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
        <Path fill="currentColor" d="M16 7a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM15 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M16 15a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M3 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm18 2h-8v14h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M3 5h8v14H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};