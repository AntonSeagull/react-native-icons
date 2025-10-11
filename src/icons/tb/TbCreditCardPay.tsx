

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCreditCardPay = (props: IconProps) => {

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
          <Path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
          <Path d="M3 10h18" />
          <Path d="M16 19h6" />
          <Path d="M19 16l3 3l-3 3" />
          <Path d="M7.005 15h.005" />
          <Path d="M11 15h2" />
        </G>
      </Svg>
    );
  }

