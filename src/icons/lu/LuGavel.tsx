

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGavel = (props: IconProps) => {

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
          <Path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" />
          <Path d="m16 16 6-6" />
          <Path d="m21.5 10.5-8-8" />
          <Path d="m8 8 6-6" />
          <Path d="m8.5 7.5 8 8" />
        </G>
      </Svg>
    );
  }

