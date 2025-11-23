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

export const FiCodepen = (props: IconProps) => {
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
        <Path d="m12 2 10 6.5v7L12 22 2 15.5v-7zM12 22v-6.5" />
        <Path d="m22 8.5-10 7-10-7" />
        <Path d="m2 15.5 10-7 10 7M12 2v6.5" />
      </G>
    </Svg>
  );
};