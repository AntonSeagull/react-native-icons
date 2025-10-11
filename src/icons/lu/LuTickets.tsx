

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTickets = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" />
          <Path d="M6 10V8" />
          <Path d="M6 14v1" />
          <Path d="M6 19v2" />
        </G>
      </Svg>
    );
  }

