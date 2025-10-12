

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoColorWandOutline = (props: IconProps) => {

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
          <Line  x1="48" y1="192" x2="96" y2="192" strokeMiterlimit="10" strokeWidth="32" strokeLinecap="round" />
          <Line  x1="90.18" y1="90.18" x2="124.12" y2="124.12" strokeMiterlimit="10" strokeWidth="32" strokeLinecap="round" />
          <Line  x1="192" y1="48" x2="192" y2="96" strokeMiterlimit="10" strokeWidth="32" strokeLinecap="round" />
          <Line  x1="293.82" y1="90.18" x2="259.88" y2="124.12" strokeMiterlimit="10" strokeWidth="32" strokeLinecap="round" />
          <Line  x1="124.12" y1="259.88" x2="90.18" y2="293.82" strokeMiterlimit="10" strokeWidth="32" strokeLinecap="round" />
          <Path  d="M178.38,178.38h0a31.64,31.64,0,0,0,0,44.75L223.25,268,268,223.25l-44.87-44.87A31.64,31.64,0,0,0,178.38,178.38Z" />
        </G>
      </Svg>
    );
  }

