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

export const ImtsDots = (props: IconProps) => {
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
        <Path d="M2 14h14v2H0V0h2zm2.5-1a1.5 1.5 0 1 1 .131-2.994l1.612-2.687a1.5 1.5 0 1 1 2.514 0l1.612 2.687a1.4 1.4 0 0 1 .23-.002l2.662-4.658a1.5 1.5 0 1 1 1.14.651l-2.662 4.658a1.5 1.5 0 1 1-2.496.026L7.631 7.994a1.4 1.4 0 0 1-.262 0l-1.612 2.687A1.5 1.5 0 0 1 4.5 13" />
      </G>
    </Svg>
  );
};