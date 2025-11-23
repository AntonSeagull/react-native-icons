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

export const TbEggOff = (props: IconProps) => {
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
        <Path d="M17.927 17.934C16.716 19.792 14.576 20.887 12 21c-4.2 0-7-2.763-7-6.917 0-2.568.753-5.14 1.91-7.158M8.642 4.628C9.676 3.608 10.838 2.998 12 3c3.5.007 7 5.545 7 11.083q0 .447-.045.868M3 3l18 18" />
      </G>
    </Svg>
  );
};