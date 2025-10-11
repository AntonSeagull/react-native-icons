

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGlassesOutline = (props: IconProps) => {

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
          <Line  x1="448" y1="200" x2="464" y2="200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="64" y1="200" x2="48" y2="200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M224,232a32,32,0,0,1,64,0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M64,200c0,96,16,128,80,128s80-32,80-128c0,0-16-16-80-16S64,200,64,200Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M448,200c0,96-16,128-80,128s-80-32-80-128c0,0,16-16,80-16S448,200,448,200Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

