

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbParenthesesOff = (props: IconProps) => {

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
          <Path d="M5.743 5.745a12.253 12.253 0 0 0 1.257 14.255" />
          <Path d="M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794a12.291 12.291 0 0 1 -1.254 1.739" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

