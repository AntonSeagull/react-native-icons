

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowUUpRightLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M171.76,131.76,209.51,94H88a50,50,0,0,0,0,100h88a6,6,0,0,1,0,12H88A62,62,0,0,1,88,82H209.51L171.76,44.24a6,6,0,0,1,8.48-8.48l48,48a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48-8.48Z" />
        </G>
      </Svg>
    );
  }

