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

export const PiTagChevronLight = (props: IconProps) => {
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
        <Path d="m245 124.67-45.63-68.44A14 14 0 0 0 187.72 50H32a6 6 0 0 0-5 9.33L72.79 128 27 196.67a6 6 0 0 0 5 9.33h155.72a14 14 0 0 0 11.65-6.23L245 131.33a6 6 0 0 0 0-6.66m-55.61 68.44a2 2 0 0 1-1.66.89H43.21L85 131.33a6 6 0 0 0 0-6.66L43.21 62h144.51a2 2 0 0 1 1.66.89L232.79 128Z" />
      </G>
    </Svg>
  );
};