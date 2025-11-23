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

export const LiaGofore = (props: IconProps) => {
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
        <Path d="M17 4C10.373 4 5 9.373 5 16s5.373 12 12 12c3.585 0 6.782-1.592 8.979-4.086-.116-1.795-1.489-3.837-3.979-3.902v.853C20.729 22.175 18.964 23 17 23c-3.86 0-7-3.14-7-7s3.14-7 7-7a6.97 6.97 0 0 1 4.457 1.607l3.506-3.568A11.94 11.94 0 0 0 17 4m-1 9v5h6c2.21 0 3.418.796 4 2 0-2.631.002-7-4-7z" />
      </G>
    </Svg>
  );
};