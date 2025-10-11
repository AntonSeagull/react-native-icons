

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiScooterThin = (props: IconProps) => {

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
          <Path d="M212,140a31.29,31.29,0,0,0-6.24.62l-34-101.88A4,4,0,0,0,168,36H136a4,4,0,0,0,0,8h29.12l19,57.14-58,70.86H76a32,32,0,1,0-1,8h53a4,4,0,0,0,3.09-1.46l56.06-68.43,11,33A32,32,0,1,0,212,140ZM44,196a24,24,0,1,1,24-24A24,24,0,0,1,44,196Zm168,0a24,24,0,1,1,24-24A24,24,0,0,1,212,196Z" />
        </G>
      </Svg>
    );
  }

