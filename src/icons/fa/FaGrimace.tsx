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

export const FaGrimace = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 496 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 248, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8M144 400h-8c-17.7 0-32-14.3-32-32v-8h40zm0-56h-40v-8c0-17.7 14.3-32 32-32h8zm-8-136c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m72 192h-48v-40h48zm0-56h-48v-40h48zm64 56h-48v-40h48zm0-56h-48v-40h48zm64 56h-48v-40h48zm0-56h-48v-40h48zm-8-104c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m64 128c0 17.7-14.3 32-32 32h-8v-40h40zm0-24h-40v-40h8c17.7 0 32 14.3 32 32z" />
      </G>
    </Svg>
  );
};