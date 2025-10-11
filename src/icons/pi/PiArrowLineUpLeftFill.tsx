

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineUpLeftFill = (props: IconProps) => {

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
          <Path d="M64,144V48a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L131.31,96l58.35,58.34a8,8,0,0,1-11.32,11.32L120,107.31,77.66,149.66A8,8,0,0,1,64,144Zm160,56H48a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z" />
        </G>
      </Svg>
    );
  }

