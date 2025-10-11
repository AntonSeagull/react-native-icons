

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoReceiptOutline = (props: IconProps) => {

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
          <Line  x1="224" y1="144" x2="416" y2="144" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="288" y1="224" x2="416" y2="224" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M480,272V384a80,80,0,0,1-80,80h0a80,80,0,0,1-80-80V336H48a15.86,15.86,0,0,0-16,16c0,64,6.74,112,80,112H400" fill="none" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

