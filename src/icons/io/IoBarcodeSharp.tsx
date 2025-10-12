

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBarcodeSharp = (props: IconProps) => {

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
          <Polyline  points="400 400.33 448 400 448 112 400 112.33" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
          <Polyline  points="112 112 64 112.33 64 400.33 112 400" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="384" y1="192" x2="384" y2="320" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="320" y1="160" x2="320" y2="352" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="256" y1="176" x2="256" y2="336" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="192" y1="160" x2="192" y2="352" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="128" y1="192" x2="128" y2="320" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

