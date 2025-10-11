

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTramThin = (props: IconProps) => {

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
          <Path  d="M184,52H132V20h36a4,4,0,0,0,0-8H88a4,4,0,0,0,0,8h36V52H72A28,28,0,0,0,44,80V184a28,28,0,0,0,28,28H88L68.8,237.6a4,4,0,1,0,6.4,4.8L98,212h60l22.8,30.4a4,4,0,0,0,6.4-4.8L168,212h16a28,28,0,0,0,28-28V80A28,28,0,0,0,184,52ZM72,60H184a20,20,0,0,1,20,20v44H52V80A20,20,0,0,1,72,60ZM184,204H72a20,20,0,0,1-20-20V132H204v52A20,20,0,0,1,184,204ZM92,172a8,8,0,1,1-8-8A8,8,0,0,1,92,172Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,180,172Z" />
        </G>
      </Svg>
    );
  }

