

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAngry = (props: IconProps) => {

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
          <Path  d="M16 16s-1.5-2-4-2-4 2-4 2" />
          <Path  d="M7.5 8 10 9" />
          <Path  d="m14 9 2.5-1" />
          <Path  d="M9 10h.01" />
          <Path  d="M15 10h.01" />
        </G>
      </Svg>
    );
  }

