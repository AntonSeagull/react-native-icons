

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoAngular = (props: IconProps) => {

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
          <Path d="M256,32,32,112,78.12,384,256,480l177.75-96L480,112Zm88,320-26.59-56H194.58L168,352H128L256,72,384,352Z" />
        </G>
      </Svg>
    );
  }

