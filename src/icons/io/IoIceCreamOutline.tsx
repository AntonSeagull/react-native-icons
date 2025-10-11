

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoIceCreamOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M299.42,223.48C291.74,239.75,275.18,252,256,252c-13.1,0-27-5-33.63-9.76C216.27,237.87,208,240,208,250v62a24.07,24.07,0,0,1-24,24h0a24.07,24.07,0,0,1-24-24V256h-2c-35.35,0-62-28.65-62-64a64,64,0,0,1,64-64h8v-8a88,88,0,0,1,176,0v8h8a64,64,0,0,1,0,128c-21.78,0-42-13-52.59-32.51Z" />
        </G>
      </Svg>
    );
  }

