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

export const PiLessThanLight = (props: IconProps) => {
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
        <Path d="M205.42 202.57a6 6 0 0 1-8 2.85l-152-72a6 6 0 0 1 0-10.84l152-72a6 6 0 0 1 5.14 10.84L62 128l140.55 66.58a6 6 0 0 1 2.87 7.99" />
      </G>
    </Svg>
  );
};