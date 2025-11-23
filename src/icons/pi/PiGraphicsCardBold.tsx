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

export const PiGraphicsCardBold = (props: IconProps) => {
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
        <Path d="M232 44H16A12 12 0 0 0 4 56v152a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h84a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 128H28V68h200Zm-52-12a40 40 0 1 0-40-40 40 40 0 0 0 40 40m0-56a16 16 0 1 1-16 16 16 16 0 0 1 16-16m-96 56a40 40 0 1 0-40-40 40 40 0 0 0 40 40m0-56a16 16 0 1 1-16 16 16 16 0 0 1 16-16" />
      </G>
    </Svg>
  );
};