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

export const Imnload = (props: IconProps) => {
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
        <Path d="m8 9 4-4H9V1H7v4H4zm3.636-1.636-1.121 1.121L14.579 10 8 12.453 1.421 10l4.064-1.515-1.121-1.121L0 9v4l8 3 8-3V9z" />
      </G>
    </Svg>
  );
};