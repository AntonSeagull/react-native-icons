

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSubsetProperOfDuotone = (props: IconProps) => {

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
          <Path d="M200,48V208H128a80,80,0,0,1-80-80h0a80,80,0,0,1,80-80Z" />
          <Path d="M208,208a8,8,0,0,1-8,8H128a88,88,0,0,1,0-176h72a8,8,0,0,1,0,16H128a72,72,0,0,0,0,144h72A8,8,0,0,1,208,208Z" />
        </G>
      </Svg>
    );
  }

