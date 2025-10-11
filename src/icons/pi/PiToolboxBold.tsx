

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiToolboxBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M224,64H180V56a28,28,0,0,0-28-28H104A28,28,0,0,0,76,56v8H32A20,20,0,0,0,12,84V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V84A20,20,0,0,0,224,64ZM100,56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM220,88v32H196v-4a12,12,0,0,0-24,0v4H84v-4a12,12,0,0,0-24,0v4H36V88ZM36,188V144H60v4a12,12,0,0,0,24,0v-4h88v4a12,12,0,0,0,24,0v-4h24v44Z" />
        </G>
      </Svg>
    );
  }

