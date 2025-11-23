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

export const LiaCopyright = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5m-.094 5c-3.324 0-6 2.676-6 6s2.676 6 6 6c2.399 0 4.45-1.437 5.406-3.469l-1.812-.843C18.855 19.058 17.508 20 15.906 20c-2.277 0-4-1.723-4-4s1.723-4 4-4c1.602 0 2.95.941 3.594 2.313l1.813-.844C20.355 11.438 18.305 10 15.906 10" />
      </G>
    </Svg>
  );
};