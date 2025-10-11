

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHomeOff = (props: IconProps) => {

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
          <Path d="M5 12h-2l4.497 -4.497m2 -2l2.504 -2.504l9 9h-2" />
          <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-3" />
          <Path d="M9 21v-6a2 2 0 0 1 2 -2h2m2 2v6" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

