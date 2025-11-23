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

export const TbAdCircle = (props: IconProps) => {
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
        <Path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
        <Path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0V15M7 13h3M14 9v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
      </G>
    </Svg>
  );
};