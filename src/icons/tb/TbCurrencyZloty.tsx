

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyZloty = (props: IconProps) => {

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
          <Path d="M12 18h-7l7 -7h-7" />
          <Path d="M17 18v-13" />
          <Path d="M14 14.5l6 -3.5" />
        </G>
      </Svg>
    );
  }

