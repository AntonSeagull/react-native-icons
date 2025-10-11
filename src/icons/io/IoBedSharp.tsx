

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBedSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M432,224V96a16,16,0,0,0-16-16H96A16,16,0,0,0,80,96V224a48,48,0,0,0-48,48V432H68V400H444v32h36V272A48,48,0,0,0,432,224Zm-192,0H120V192a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16Zm32-32a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16v32H272Z" />
        </G>
      </Svg>
    );
  }

