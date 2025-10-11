

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShoppingCartPlus = (props: IconProps) => {

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
          <Path d="M12.5 17h-6.5v-14h-2" />
          <Path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
          <Path d="M16 19h6" />
          <Path d="M19 16v6" />
        </G>
      </Svg>
    );
  }

