

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyBitcoin = (props: IconProps) => {

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
          <Path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
          <Path d="M8 6l0 12" />
          <Path d="M8 12l6 0" />
          <Path d="M9 3l0 3" />
          <Path d="M13 3l0 3" />
          <Path d="M9 18l0 3" />
          <Path d="M13 18l0 3" />
        </G>
      </Svg>
    );
  }

