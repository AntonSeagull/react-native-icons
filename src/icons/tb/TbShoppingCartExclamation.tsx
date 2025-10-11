

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShoppingCartExclamation = (props: IconProps) => {

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
          <Path d="M15 17h-9v-14h-2" />
          <Path d="M6 5l14 1l-.854 5.976m-2.646 1.024h-10.5" />
          <Path d="M19 16v3" />
          <Path d="M19 22v.01" />
        </G>
      </Svg>
    );
  }

