

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyLitecoin = (props: IconProps) => {

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
          <Path d="M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717" />
          <Path d="M14 9l-9 4" />
        </G>
      </Svg>
    );
  }

