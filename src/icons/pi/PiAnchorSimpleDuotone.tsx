

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAnchorSimpleDuotone = (props: IconProps) => {

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
          <Path d="M152,64a24,24,0,1,1-24-24A24,24,0,0,1,152,64Z" />
          <Path d="M224,112H200a8,8,0,0,0,0,16h15.64A88.15,88.15,0,0,1,136,207.63V95a32,32,0,1,0-16,0V207.63A88.15,88.15,0,0,1,40.36,128H56a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8,104,104,0,0,0,208,0A8,8,0,0,0,224,112ZM112,64a16,16,0,1,1,16,16A16,16,0,0,1,112,64Z" />
        </G>
      </Svg>
    );
  }

