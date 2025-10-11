

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSchool = (props: IconProps) => {

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
          <Path  d="M14 21v-3a2 2 0 0 0-4 0v3" />
          <Path  d="M18 5v16" />
          <Path  d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
          <Path  d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
          <Path  d="M6 5v16" />
        </G>
      </Svg>
    );
  }

