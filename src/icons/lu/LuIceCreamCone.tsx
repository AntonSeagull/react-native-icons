

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuIceCreamCone = (props: IconProps) => {

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
          <Path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
          <Path d="M17 7A5 5 0 0 0 7 7" />
          <Path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
        </G>
      </Svg>
    );
  }

