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

export const TbBathFilled = (props: IconProps) => {
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
        <Path d="M11 2a1 1 0 0 1 .993.883L12 3v2.25a1 1 0 0 1-1.993.117L10 5.25V4H8a1 1 0 0 0-.993.883L7 5v6h13a2 2 0 0 1 1.995 1.85L22 13v3c0 1.475-.638 2.8-1.654 3.715l.486.73a1 1 0 0 1-1.594 1.203l-.07-.093-.55-.823a5 5 0 0 1-1.337.26L17 21H7a5 5 0 0 1-1.619-.268l-.549.823a1 1 0 0 1-1.723-1.009l.059-.1.486-.73a4.99 4.99 0 0 1-1.647-3.457L2 16v-3a2 2 0 0 1 1.85-1.995L4 11h1V5a3 3 0 0 1 2.824-2.995L8 2z" />
      </G>
    </Svg>
  );
};