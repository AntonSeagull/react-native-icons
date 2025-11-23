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

export const LiaMusicSolid = (props: IconProps) => {
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
        <Path d="m27 3.781-1.187.25-16 3L9 7.156v13.407A3.93 3.93 0 0 0 7 20c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V12.813l14-2.626v7.376A3.93 3.93 0 0 0 23 17c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4Zm-2 2.407v2l-14 2.624v-2ZM23 19c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2M7 22c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};