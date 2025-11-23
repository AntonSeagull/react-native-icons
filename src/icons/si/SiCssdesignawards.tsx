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

export const SiCssdesignawards = (props: IconProps) => {
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
        <Path d="M7.46.93 0 8.31l3.73 3.73 3.74 3.65 3.73 3.65 3.74-3.65-7.47-7.38 7.47-7.4zm5.33 3.73L9.12 8.31l7.39 7.38-7.46 7.4h7.46l3.76-3.66L24 15.7l-3.73-3.65-3.74-3.73z" />
      </G>
    </Svg>
  );
};