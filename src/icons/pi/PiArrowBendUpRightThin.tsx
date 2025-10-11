

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendUpRightThin = (props: IconProps) => {

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
          <Path  d="M226.83,106.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,108H128a92.1,92.1,0,0,0-92,92,4,4,0,0,1-8,0A100.11,100.11,0,0,1,128,100h86.34L173.17,58.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,106.83Z" />
        </G>
      </Svg>
    );
  }

