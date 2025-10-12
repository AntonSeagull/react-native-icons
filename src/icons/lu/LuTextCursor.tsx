

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTextCursor = (props: IconProps) => {

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
          <Path  d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
          <Path  d="M7 22h1a4 4 0 0 0 4-4v-1" />
          <Path  d="M7 2h1a4 4 0 0 1 4 4v1" />
        </G>
      </Svg>
    );
  }

