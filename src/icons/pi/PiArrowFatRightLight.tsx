

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatRightLight = (props: IconProps) => {

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
          <Path d="M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H48A14,14,0,0,0,34,88v80a14,14,0,0,0,14,14h82v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H48a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h88a6,6,0,0,0,6-6V46.49L223.51,128Z" />
        </G>
      </Svg>
    );
  }

