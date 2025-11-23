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

export const LiaCreativeCommonsPdAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m-7 7v8h2v-2h2c1.654 0 3-1.346 3-3s-1.346-3-3-3zm8 0v8h3.5c1.93 0 3.5-1.794 3.5-4s-1.57-4-3.5-4zm-6 2h2a1.001 1.001 0 0 1 0 2h-2zm8 0h1.5c.813 0 1.5.916 1.5 2s-.687 2-1.5 2H19z" />
      </G>
    </Svg>
  );
};