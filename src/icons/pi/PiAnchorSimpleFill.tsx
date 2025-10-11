

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAnchorSimpleFill = (props: IconProps) => {

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
          <Path d="M232,120a104,104,0,0,1-208,0,8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40.36A88.15,88.15,0,0,0,120,207.63V90.83a28,28,0,1,1,16,0v116.8A88.15,88.15,0,0,0,215.64,128H200a8,8,0,0,1,0-16h24A8,8,0,0,1,232,120Z" />
        </G>
      </Svg>
    );
  }

