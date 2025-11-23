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

export const PiShowerFill = (props: IconProps) => {
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
        <Path d="M64 236a12 12 0 1 1-12-12 12 12 0 0 1 12 12m20-44a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-64 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m32-32a12 12 0 1 0 12 12 12 12 0 0 0-12-12M248 32h-32a8 8 0 0 0-5.66 2.34l-30.2 30.2L53.38 86.19a16 16 0 0 0-8.69 27.1l98 98a16 16 0 0 0 27.09-8.66l21.68-126.77L219.31 48H248a8 8 0 0 0 0-16" />
      </G>
    </Svg>
  );
};