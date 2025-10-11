

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCoinEuro = (props: IconProps) => {

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
          <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path d="M14.401 8c-.669 -.628 -1.5 -1 -2.401 -1c-2.21 0 -4 2.239 -4 5s1.79 5 4 5c.9 0 1.731 -.372 2.4 -1" />
          <Path d="M7 10.5h4" />
          <Path d="M7 13.5h4" />
        </G>
      </Svg>
    );
  }

