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

export const BiDownArrowCircle = (props: IconProps) => {
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
        <Path d="M12 1.993C6.486 1.994 2 6.48 2 11.994s4.486 9.999 10 10 10-4.486 10-10-4.485-10-10-10.001m0 18.001c-4.411-.001-8-3.59-8-8s3.589-8 8-8.001c4.411.001 8 3.59 8 8.001s-3.589 8-8 8" />
        <Path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
      </G>
    </Svg>
  );
};