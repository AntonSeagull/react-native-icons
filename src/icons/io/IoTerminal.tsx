

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTerminal = (props: IconProps) => {

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
          <Path  d="M432,32H80A64.07,64.07,0,0,0,16,96V416a64.07,64.07,0,0,0,64,64H432a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,432,32ZM96,256a16,16,0,0,1-10-28.49L150.39,176,86,124.49a16,16,0,1,1,20-25l80,64a16,16,0,0,1,0,25l-80,64A16,16,0,0,1,96,256Zm160,0H192a16,16,0,0,1,0-32h64a16,16,0,0,1,0,32Z" />
        </G>
      </Svg>
    );
  }

