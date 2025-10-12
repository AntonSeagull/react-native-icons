

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSpeedometerOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="128" x2="256" y2="160" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="416" y1="288" x2="384" y2="288" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="128" y1="288" x2="96" y2="288" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="165.49" y1="197.49" x2="142.86" y2="174.86" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="346.51" y1="197.49" x2="369.14" y2="174.86" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M326.1,231.9l-47.5,75.5a31,31,0,0,1-7,7,30.11,30.11,0,0,1-35-49l75.5-47.5a10.23,10.23,0,0,1,11.7,0A10.06,10.06,0,0,1,326.1,231.9Z" />
          <Path  d="M256,64C132.3,64,32,164.2,32,287.9A223.18,223.18,0,0,0,88.3,436.4c1.1,1.2,2.1,2.4,3.2,3.5a25.19,25.19,0,0,0,37.1-.1,173.13,173.13,0,0,1,254.8,0,25.19,25.19,0,0,0,37.1.1l3.2-3.5A223.18,223.18,0,0,0,480,287.9C480,164.2,379.7,64,256,64Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

