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

export const RiCornerUpRightDoubleFill = (props: IconProps) => {
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
        <Path d="M4 19v-9h5.586V4.586L16 11l-6.414 6.414V12H6v7zm9.836-12.95 1.415-1.414L21.614 11l-6.363 6.364-1.415-1.414 4.95-4.95z" />
      </G>
    </Svg>
  );
};