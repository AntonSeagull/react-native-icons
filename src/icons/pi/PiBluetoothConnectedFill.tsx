

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBluetoothConnectedFill = (props: IconProps) => {

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
          <Path d="M200,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,128,232a8,8,0,0,1-8-8V144L68.8,182.4a8,8,0,0,1-9.6-12.8L114.67,128,59.2,86.4a8,8,0,0,1,9.6-12.8L120,112V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8L141.33,128l55.47,41.6A8,8,0,0,1,200,176ZM72,128a12,12,0,1,0-12,12A12,12,0,0,0,72,128Zm132-12a12,12,0,1,0,12,12A12,12,0,0,0,204,116Z" />
        </G>
      </Svg>
    );
  }

