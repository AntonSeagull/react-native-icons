

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberOneLight = (props: IconProps) => {

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
          <Path d="M142,48V208a6,6,0,0,1-12,0V58.6L99.09,77.14a6,6,0,0,1-6.18-10.29l40-24A6,6,0,0,1,142,48Z" />
        </G>
      </Svg>
    );
  }

