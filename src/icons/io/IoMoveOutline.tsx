

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMoveOutline = (props: IconProps) => {

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
          <Polyline  points="176 112 256 32 336 112" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Polyline  points="176 400 256 480 336 400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Polyline  points="400 176 480 256 400 336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Polyline  points="112 176 32 256 112 336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="255.98" y1="32" x2="256" y2="480" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="32" y1="256" x2="480" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

