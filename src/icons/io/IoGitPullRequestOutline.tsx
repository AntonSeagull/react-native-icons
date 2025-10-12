

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGitPullRequestOutline = (props: IconProps) => {

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
          <Circle  cx="128" cy="416" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Circle  cx="128" cy="96" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Circle  cx="384" cy="416" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Polyline  points="288 160 224 96 288 32" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="128" y1="144" x2="128" y2="368" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M240,96h84a60,60,0,0,1,60,60V368" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

