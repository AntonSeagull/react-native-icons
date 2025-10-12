

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoVideocamOffOutline = (props: IconProps) => {

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
          <Line  fill="none" x1="416" y1="416" x2="80" y2="80" strokeLinecap="round" strokeWidth="32" strokeMiterlimit="10" />
          <Path  fill="none" d="M374.79,308.78,457.5,367A16,16,0,0,0,480,352.38V159.62A16,16,0,0,0,457.5,145l-82.71,58.22A16,16,0,0,0,368,216.3v79.4A16,16,0,0,0,374.79,308.78Z" strokeLinecap="round" strokeWidth="32" strokeLinejoin="round" />
          <Path  fill="none" d="M50.19,140.57A51.94,51.94,0,0,0,32,180V332a52.15,52.15,0,0,0,52,52H268a51.6,51.6,0,0,0,22-4.9" strokeLinecap="round" strokeWidth="32" strokeMiterlimit="10" />
          <Path  fill="none" d="M208,128h60.48A51.68,51.68,0,0,1,320,179.52V248" strokeLinecap="round" strokeWidth="32" strokeMiterlimit="10" />
        </G>
      </Svg>
    );
  }

