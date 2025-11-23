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

export const PiCookieLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M163.07 164.93a10 10 0 1 1-14.14 0 10 10 0 0 1 14.14 0m-78.14-8a10 10 0 1 0 14.14 0 10 10 0 0 0-14.14 0m6.14-41.86a10 10 0 1 0-14.14 0 10 10 0 0 0 14.14 0m33.86 1.86a10 10 0 1 0 14.14 0 10 10 0 0 0-14.14 0M230 128A102 102 0 1 1 128 26a6 6 0 0 1 6 6 42 42 0 0 0 42 42 6 6 0 0 1 6 6 42 42 0 0 0 42 42 6 6 0 0 1 6 6m-12.18 5.65A54.09 54.09 0 0 1 170.3 85.7a54.09 54.09 0 0 1-48-47.53 90 90 0 1 0 95.47 95.48Z" />
      </G>
    </Svg>
  );
};