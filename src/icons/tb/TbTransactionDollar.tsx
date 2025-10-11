

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTransactionDollar = (props: IconProps) => {

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
          <Path d="M20.8 13a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
          <Path d="M18 11v10" />
          <Path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M7 5h8" />
          <Path d="M7 5v8a3 3 0 0 0 3 3h1" />
        </G>
      </Svg>
    );
  }

