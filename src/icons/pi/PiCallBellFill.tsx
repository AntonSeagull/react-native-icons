

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCallBellFill = (props: IconProps) => {

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
          <Path d="M16,176a8,8,0,0,1,8-8h8V152a96.12,96.12,0,0,1,88-95.66V40H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16H136V56.34A96.12,96.12,0,0,1,224,152v16h8a8,8,0,0,1,0,16H24A8,8,0,0,1,16,176Zm216,24H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z" />
        </G>
      </Svg>
    );
  }

