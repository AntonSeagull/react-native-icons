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

export const SiAnalogue = (props: IconProps) => {
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
        <Path d="M5.468 12.804a5.145 5.145 0 1 0-.644 10.27 5.145 5.145 0 0 0 .644-10.27m17.841 2.562L16.45 3.484a5.146 5.146 0 0 0-8.912 5.15l6.86 11.878a5.15 5.15 0 0 0 7.031 1.885 5.146 5.146 0 0 0 1.881-7.031z" />
      </G>
    </Svg>
  );
};