

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoAppleAr = (props: IconProps) => {

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
          <Polyline  points="201.14 64 256 32 310.86 64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Polyline  points="310.86 448 256 480 201.14 448" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Polyline  points="64 207.51 64 144 117.15 112.49" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Polyline  points="448 304.49 448 368 394.85 399.51" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Polyline  points="117.15 400 64 368 64 304.49" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Polyline  points="394.85 112.49 448 144 448 207.51" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Polyline  points="256 320 256 256 310.86 224" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
          <Line  x1="256" y1="32" x2="256" y2="112" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
          <Line  x1="256" y1="480" x2="256" y2="400" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
          <Line  x1="64" y1="144" x2="131.29" y2="184" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
          <Line  x1="448" y1="368" x2="380.71" y2="328" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
          <Line  x1="64" y1="368" x2="130.64" y2="328" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
          <Line  x1="448" y1="144" x2="380.71" y2="184" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
          <Line  x1="256" y1="256" x2="201.14" y2="224" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

