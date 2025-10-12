

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoInformation = (props: IconProps) => {

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
          <Polyline  points="196 220 260 220 260 392" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40px" />
          <Line  x1="187" y1="396" x2="325" y2="396" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="40px" />
          <Path  d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" />
        </G>
      </Svg>
    );
  }

