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

export const TfiLineDotted = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 7.998h.5v1H0zm2.383 1.001h.941v-1h-.941zm2.823 0h.941v-1h-.941zM10.854 9h.941V8h-.941zM8.03 8.999h.94V8h-.94zM13.677 9h.941V8h-.941zM16.5 8v1h.5V8z" />
      </G>
    </Svg>
  );
};