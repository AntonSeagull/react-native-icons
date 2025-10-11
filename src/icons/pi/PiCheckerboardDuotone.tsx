

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCheckerboardDuotone = (props: IconProps) => {

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
          <Path  d="M40,128h88v88H48a8,8,0,0,1-8-8ZM208,40H128v88h88V48A8,8,0,0,0,208,40Z" opacity="0.2" />
          <Path  d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,88H136V48h72ZM120,48v72H48V48ZM48,136h72v72H48Zm160,72H136V136h72v72Z" />
        </G>
      </Svg>
    );
  }

