

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoUmbrellaOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="64" x2="256" y2="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M256,272V432a32,32,0,0,1-32,32h0a32,32,0,0,1-32-32" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M464,272c0-114.88-93.12-208-208-208S48,157.12,48,272h0a67.88,67.88,0,0,1,96,0h0a78.28,78.28,0,0,1,102.31-7.27L256,272l9.69-7.27A78.28,78.28,0,0,1,368,272h0a67.88,67.88,0,0,1,96,0Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

