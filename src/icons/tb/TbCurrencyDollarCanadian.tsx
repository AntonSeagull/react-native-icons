

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyDollarCanadian = (props: IconProps) => {

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
          <Path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
          <Path d="M10 18h-1a6 6 0 1 1 0 -12h1" />
          <Path d="M17 20v-2" />
          <Path d="M18 6v-2" />
        </G>
      </Svg>
    );
  }

