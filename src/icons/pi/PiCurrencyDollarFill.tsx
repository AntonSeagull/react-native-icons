

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyDollarFill = (props: IconProps) => {

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
          <Path  d="M160,152a16,16,0,0,1-16,16h-8V136h8A16,16,0,0,1,160,152Zm72-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-56,24a32,32,0,0,0-32-32h-8V88h4a16,16,0,0,1,16,16,8,8,0,0,0,16,0,32,32,0,0,0-32-32h-4V64a8,8,0,0,0-16,0v8h-4a32,32,0,0,0,0,64h4v32h-8a16,16,0,0,1-16-16,8,8,0,0,0-16,0,32,32,0,0,0,32,32h8v8a8,8,0,0,0,16,0v-8h8A32,32,0,0,0,176,152Zm-76-48a16,16,0,0,0,16,16h4V88h-4A16,16,0,0,0,100,104Z" />
        </G>
      </Svg>
    );
  }

