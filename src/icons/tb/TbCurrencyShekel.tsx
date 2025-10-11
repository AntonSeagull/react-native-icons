

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyShekel = (props: IconProps) => {

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
          <Path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
          <Path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
        </G>
      </Svg>
    );
  }

