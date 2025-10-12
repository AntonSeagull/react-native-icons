

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSunnyOutline = (props: IconProps) => {

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
          <Circle  cx="256" cy="256" r="80" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="256" y1="48" x2="256" y2="96" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="256" y1="416" x2="256" y2="464" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="403.08" y1="108.92" x2="369.14" y2="142.86" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="142.86" y1="369.14" x2="108.92" y2="403.08" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="464" y1="256" x2="416" y2="256" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="96" y1="256" x2="48" y2="256" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="403.08" y1="403.08" x2="369.14" y2="369.14" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="142.86" y1="142.86" x2="108.92" y2="108.92" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

