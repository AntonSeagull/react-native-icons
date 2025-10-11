

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiProsieben = (props: IconProps) => {

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
          <Path d="M.24 0H23.68V6.64H.24M23.76 7.92V24H.24s2.88-7.84 10.48-12.48c7.12-4.4 13.04-3.6 13.04-3.6Z" />
        </G>
      </Svg>
    );
  }

