

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFlashlightBold = (props: IconProps) => {

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
          <Path  d="M184,12H72A20,20,0,0,0,52,32V77.33a20.12,20.12,0,0,0,4,12L76,116V224a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V116l20-26.67a20.12,20.12,0,0,0,4-12V32A20,20,0,0,0,184,12Zm-4,24V52H76V36Zm-20,66.67a20.12,20.12,0,0,0-4,12V220H100V114.67a20.12,20.12,0,0,0-4-12L76,76H180ZM140,120v32a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Z" />
        </G>
      </Svg>
    );
  }

