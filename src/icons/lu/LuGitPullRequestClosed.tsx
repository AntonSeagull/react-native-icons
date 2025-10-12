

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitPullRequestClosed = (props: IconProps) => {

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
          <Circle  cx="6" cy="6" r="3" />
          <Circle  cx="18" cy="18" r="3" />
          <Path  d="M6 9v12" />
          <Path  d="m21 3-6 6" />
          <Path  d="m21 9-6-6" />
          <Path  d="M18 11.5V15" />
        </G>
      </Svg>
    );
  }

