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

export const SiMeilisearch = (props: IconProps) => {
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
        <Path d="m6.505 18.998 4.434-11.345a4.17 4.17 0 0 1 3.882-2.651h2.674l-4.434 11.345a4.17 4.17 0 0 1-3.883 2.651zm6.505 0 4.434-11.345a4.17 4.17 0 0 1 3.883-2.651H24l-4.434 11.345a4.17 4.17 0 0 1-3.882 2.651zm-13.01 0L4.434 7.653a4.17 4.17 0 0 1 3.882-2.651h2.674L6.556 16.347a4.17 4.17 0 0 1-3.883 2.651z" />
      </G>
    </Svg>
  );
};