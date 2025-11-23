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

export const LiaCreativeCommonsRemix = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m-1.502 4L11 10.328v3.625l.064.026-.066.021L8 15.139v3.377L11.002 20 14 18.59v.002l6.502 2.416L24 19.678v-3.623l-3-1.116v-3.521zm5.217 6.527 2.365.88-1.582.6-2.363-.878zm-4.715.5 5 1.862v1.865l-5-1.858zm8 1.1v1.861l-2 .76v-1.861z" />
      </G>
    </Svg>
  );
};