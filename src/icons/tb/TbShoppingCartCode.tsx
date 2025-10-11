

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShoppingCartCode = (props: IconProps) => {

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
          <Path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M11.5 17h-5.5v-14h-2" />
          <Path d="M6 5l14 1l-1 7h-13" />
          <Path d="M20 21l2 -2l-2 -2" />
          <Path d="M17 17l-2 2l2 2" />
        </G>
      </Svg>
    );
  }

