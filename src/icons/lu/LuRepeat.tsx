

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRepeat = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="m17 2 4 4-4 4" />
          <Path  d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <Path  d="m7 22-4-4 4-4" />
          <Path  d="M21 13v1a4 4 0 0 1-4 4H3" />
        </G>
      </Svg>
    );
  }

