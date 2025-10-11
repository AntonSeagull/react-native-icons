

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyPeso = (props: IconProps) => {

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
          <Path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
          <Path d="M18 8h-12" />
          <Path d="M18 11h-12" />
        </G>
      </Svg>
    );
  }

