

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBluetoothX = (props: IconProps) => {

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
          <Path d="M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802" />
          <Path d="M16 6l4 4" />
          <Path d="M20 6l-4 4" />
        </G>
      </Svg>
    );
  }

