

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiHadesSymbol = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M240 16 112 272l72.8 53 55-37.1L192 256zm32 0 48 240-144 96-64 48 144 96 144-96-64-48-8.2-5.4-56.5 41.2L288 400l-32 32-32-32 176-128z" fill="#000" />
        </G>
      </Svg>
    );
  }

