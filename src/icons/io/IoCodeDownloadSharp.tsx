

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCodeDownloadSharp = (props: IconProps) => {

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
          <Polyline  points="160 368 32 256 160 144" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="42px" />
          <Polyline  points="352 368 480 256 352 144" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="42px" />
          <Polyline  points="192 288.1 256 352 320 288.1" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="42px" />
          <Line  x1="256" y1="160" x2="256" y2="336.03" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="42px" />
        </G>
      </Svg>
    );
  }

