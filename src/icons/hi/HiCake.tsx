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

export const HiCake = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M6 3a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1m2 3a1 1 0 0 0-2 0v1a2 2 0 0 0-2 2v1a2 2 0 0 0-2 2v.683a3.7 3.7 0 0 1 1.055.485 1.7 1.7 0 0 0 1.89 0 3.7 3.7 0 0 1 4.11 0 1.7 1.7 0 0 0 1.89 0 3.7 3.7 0 0 1 4.11 0 1.7 1.7 0 0 0 1.89 0A3.7 3.7 0 0 1 18 12.683V12a2 2 0 0 0-2-2V9a2 2 0 0 0-2-2V6a1 1 0 1 0-2 0v1h-1V6a1 1 0 1 0-2 0v1H8zm10 8.868a3.7 3.7 0 0 1-4.055-.036 1.7 1.7 0 0 0-1.89 0 3.7 3.7 0 0 1-4.11 0 1.7 1.7 0 0 0-1.89 0A3.7 3.7 0 0 1 2 14.868V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zM9 3a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m3 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};