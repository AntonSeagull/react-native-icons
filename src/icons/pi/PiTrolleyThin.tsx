

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTrolleyThin = (props: IconProps) => {

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
          <Path d="M84,224a12,12,0,1,1-12-12A12,12,0,0,1,84,224Zm132-12a12,12,0,1,0,12,12A12,12,0,0,0,216,212Zm24-32H52V75.31a12,12,0,0,0-3.51-8.48L26.83,45.17a4,4,0,0,0-5.66,5.66L42.83,72.48A4,4,0,0,1,44,75.31V180H32a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8Z" />
        </G>
      </Svg>
    );
  }

