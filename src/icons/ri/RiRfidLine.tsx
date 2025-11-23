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

export const RiRfidLine = (props: IconProps) => {
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
        <Path d="M18.364 18.364a9 9 0 0 0 0-12.728l1.414-1.414c4.296 4.296 4.296 11.26 0 15.556zM5.636 5.636a9 9 0 0 0 0 12.728l-1.414 1.414c-4.296-4.295-4.296-11.26 0-15.556zm9.9 9.9a5 5 0 0 0 0-7.072L16.95 7.05a7 7 0 0 1 0 9.9zM8.464 8.464a5 5 0 0 0 0 7.072L7.05 16.95a7 7 0 0 1 0-9.9zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </G>
    </Svg>
  );
};