

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGitBranchOutline = (props: IconProps) => {

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
          <Circle  cx="160" cy="96" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Circle  cx="160" cy="416" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Circle  cx="352" cy="160" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="160" y1="368" x2="160" y2="144" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M352,208c0,128-192,48-192,160" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

