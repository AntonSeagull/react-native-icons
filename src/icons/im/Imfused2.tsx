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

export const Imfused2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m5.735 8.665a2.5 2.5 0 0 1-3.204-1.494 1.5 1.5 0 0 0-1.923-.896A1.5 1.5 0 0 0 4.655 12H3.642a2.505 2.505 0 0 1 1.624-2.665 2.5 2.5 0 0 1 3.204 1.494 1.5 1.5 0 0 0 1.923.896A1.5 1.5 0 0 0 11.346 10h1.014a2.505 2.505 0 0 1-1.624 2.665z" />
      </G>
    </Svg>
  );
};