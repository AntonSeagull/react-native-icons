

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLocateOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="96" x2="256" y2="56" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48px" />
          <Line  x1="256" y1="456" x2="256" y2="416" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48px" />
          <Line  x1="416" y1="256" x2="456" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48px" />
          <Line  x1="56" y1="256" x2="96" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48px" />
          <Path  d="M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

