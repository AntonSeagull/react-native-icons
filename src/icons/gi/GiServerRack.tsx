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

export const GiServerRack = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M41 25v78h430V25zm254 23h18v32h-18zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16M64 55h48v18H64zm80 0h48v18h-48zm80 0h48v18h-48zm-119 66v30h302v-30zm-64 48v78h430v-78zm254 23h18v32h-18zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16m-352 7h48v18H64zm80 0h48v18h-48zm80 0h48v18h-48zm-119 66v30h302v-30zm-64 48v78h430v-78zm254 23h18v32h-18zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16m-352 7h48v18H64zm80 0h48v18h-48zm80 0h48v18h-48zm13 66v30h38v-30zM25 457v30h130.2l20-30zm171.8 0-20 30h158.4l-20-30zm140 0 20 30H487v-30z" />
      </G>
    </Svg>
  );
};