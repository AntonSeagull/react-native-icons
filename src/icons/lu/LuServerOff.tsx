

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuServerOff = (props: IconProps) => {

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
          <Path  d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
          <Path  d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
          <Path  d="M22 17v-1a2 2 0 0 0-2-2h-1" />
          <Path  d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
          <Path  d="M6 18h.01" />
          <Path  d="m2 2 20 20" />
        </G>
      </Svg>
    );
  }

