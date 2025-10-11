

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSprayCan = (props: IconProps) => {

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
          <Path  d="M3 3h.01" />
          <Path  d="M7 5h.01" />
          <Path  d="M11 7h.01" />
          <Path  d="M3 7h.01" />
          <Path  d="M7 9h.01" />
          <Path  d="M3 11h.01" />
          <Path  d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
          <Path  d="m13 14 8-2" />
          <Path  d="m13 19 8-2" />
        </G>
      </Svg>
    );
  }

