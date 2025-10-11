

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowsLeftRightFill = (props: IconProps) => {

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
          <Path d="M42.34,85.66a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,88,48V72H208a8,8,0,0,1,0,16H88v24a8,8,0,0,1-13.66,5.66Zm171.32,84.68-32-32A8,8,0,0,0,168,144v24H48a8,8,0,0,0,0,16H168v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,213.66,170.34Z" />
        </G>
      </Svg>
    );
  }

