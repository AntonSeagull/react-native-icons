

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMaleOutline = (props: IconProps) => {

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
          <Circle  cx="216" cy="296" r="152" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Polyline  points="448 160 448 64 352 64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Line  x1="324" y1="188" x2="448" y2="64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

