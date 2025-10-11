

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencySom = (props: IconProps) => {

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
          <Path d="M10 18v-12h-5v10a2 2 0 0 1 -2 2" />
          <Path d="M14 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4z" />
        </G>
      </Svg>
    );
  }

