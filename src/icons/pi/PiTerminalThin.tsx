

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTerminalThin = (props: IconProps) => {

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
          <Path  d="M116,128a4,4,0,0,1-1.34,3l-72,64a4,4,0,1,1-5.32-6L106,128,37.34,67a4,4,0,0,1,5.32-6l72,64A4,4,0,0,1,116,128Zm100,60H120a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Z" />
        </G>
      </Svg>
    );
  }

