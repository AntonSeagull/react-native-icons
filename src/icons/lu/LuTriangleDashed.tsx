

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTriangleDashed = (props: IconProps) => {

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
          <Path  d="M10.17 4.193a2 2 0 0 1 3.666.013" />
          <Path  d="M14 21h2" />
          <Path  d="m15.874 7.743 1 1.732" />
          <Path  d="m18.849 12.952 1 1.732" />
          <Path  d="M21.824 18.18a2 2 0 0 1-1.835 2.824" />
          <Path  d="M4.024 21a2 2 0 0 1-1.839-2.839" />
          <Path  d="m5.136 12.952-1 1.732" />
          <Path  d="M8 21h2" />
          <Path  d="m8.102 7.743-1 1.732" />
        </G>
      </Svg>
    );
  }

