

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoStopwatchOutline = (props: IconProps) => {

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
          <Circle  cx="256" cy="272" r="32" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="256" y1="232" x2="256" y2="152" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="256" y1="88" x2="256" y2="72" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48px" />
          <Line  x1="132" y1="132" x2="120" y2="120" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48px" />
          <Path  d="M256,96A176,176,0,1,0,432,272,176,176,0,0,0,256,96Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

