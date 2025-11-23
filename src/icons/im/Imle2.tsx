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

export const Imle2 = (props: IconProps) => {
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
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 9a5 5 0 0 1-4.288-2.427l1.286-.772C5.61 10.819 6.725 11.5 8 11.5s2.389-.681 3.002-1.699l1.286.772A5 5 0 0 1 8 13" />
      </G>
    </Svg>
  );
};