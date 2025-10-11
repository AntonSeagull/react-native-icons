

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyLari = (props: IconProps) => {

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
          <Path d="M18 13a6 6 0 1 0 -6 6" />
          <Path d="M6 19h12" />
          <Path d="M10 5v7" />
          <Path d="M14 12v-7" />
        </G>
      </Svg>
    );
  }

