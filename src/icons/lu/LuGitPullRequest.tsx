

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitPullRequest = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Circle  cx="18" cy="18" r="3" />
          <Circle  cx="6" cy="6" r="3" />
          <Line  x1="6" x2="6" y1="9" y2="21" />
          <Path  d="M13 6h3a2 2 0 0 1 2 2v7" />
        </G>
      </Svg>
    );
  }

