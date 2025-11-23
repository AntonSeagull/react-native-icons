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

export const PiParallelogramBold = (props: IconProps) => {
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
        <Path d="M248.78 45.14A19.92 19.92 0 0 0 232 36H88.81a20 20 0 0 0-18.24 11.79l-64.8 144A20 20 0 0 0 24 220h143.19a20 20 0 0 0 18.24-11.79l64.8-144a19.9 19.9 0 0 0-1.45-19.07M164.6 196H30.2L91.4 60h134.4Z" />
      </G>
    </Svg>
  );
};