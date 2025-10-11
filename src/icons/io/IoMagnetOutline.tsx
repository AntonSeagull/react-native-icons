

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMagnetOutline = (props: IconProps) => {

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
          <Line  x1="192" y1="464" x2="192" y2="416" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="90.18" y1="421.82" x2="124.12" y2="387.88" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="48" y1="320" x2="96" y2="320" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="139.6" y1="169.98" x2="207.48" y2="237.87" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="275.36" y1="305.75" x2="343.25" y2="373.63" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M421.83,293.82A144,144,0,0,0,218.18,90.17" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M353.94,225.94a48,48,0,0,0-67.88-67.88" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M286.06,158.06,172.92,271.19a32,32,0,0,1-45.25,0L105,248.57a32,32,0,0,1,0-45.26L218.18,90.17" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M421.83,293.82,308.69,407a32,32,0,0,1-45.26,0l-22.62-22.63a32,32,0,0,1,0-45.26L353.94,225.94" fill="none" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

