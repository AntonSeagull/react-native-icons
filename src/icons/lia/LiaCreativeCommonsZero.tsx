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

export const LiaCreativeCommonsZero = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m0 5c-2.206 0-4 1.794-4 4v4c0 2.206 1.794 4 4 4s4-1.794 4-4v-4c0-2.206-1.794-4-4-4m0 2c.256 0 .5.054.725.143L14 17.875V14c0-1.103.897-2 2-2m2 2.12V18c0 1.103-.897 2-2 2-.258 0-.502-.053-.729-.143z" />
      </G>
    </Svg>
  );
};