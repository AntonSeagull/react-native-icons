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

export const PiHourglassSimpleFill = (props: IconProps) => {
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
        <Path d="M211.31 196.69A16 16 0 0 1 200 224H56a16 16 0 0 1-11.32-27.31 2 2 0 0 0 .13-.13L116.43 128 44.82 59.44a2 2 0 0 0-.13-.13A16 16 0 0 1 56 32h144a16 16 0 0 1 11.32 27.31 2 2 0 0 0-.13.13L139.57 128l71.61 68.56a2 2 0 0 0 .13.13" />
      </G>
    </Svg>
  );
};