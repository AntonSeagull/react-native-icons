

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSkipBackCircle = (props: IconProps) => {

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
          <Path  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM163.88,81a8,8,0,0,0-8.12.22L104,113.57V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V142.43l51.76,32.35A8,8,0,0,0,168,168V88A8,8,0,0,0,163.88,81ZM152,153.57,111.09,128,152,102.43Z" />
        </G>
      </Svg>
    );
  }

