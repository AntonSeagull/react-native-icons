

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCast = (props: IconProps) => {

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
          <Path d="M3 19l.01 0" />
          <Path d="M7 19a4 4 0 0 0 -4 -4" />
          <Path d="M11 19a8 8 0 0 0 -8 -8" />
          <Path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2" />
        </G>
      </Svg>
    );
  }

