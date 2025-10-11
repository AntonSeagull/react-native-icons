

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDiamondThin = (props: IconProps) => {

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
          <Path d="M232.5,119.55,136.45,23.49a12,12,0,0,0-16.9,0l-96,96.06a12,12,0,0,0,0,16.9l96.05,96.06a12,12,0,0,0,16.9,0l96.05-96.06a12,12,0,0,0,0-16.9Zm-5.66,11.24-96.05,96.06a4,4,0,0,1-5.58,0l-96-96.06a3.94,3.94,0,0,1,0-5.58l96.05-96.06a4,4,0,0,1,5.58,0l96.05,96.06a3.94,3.94,0,0,1,0,5.58Z" />
        </G>
      </Svg>
    );
  }

