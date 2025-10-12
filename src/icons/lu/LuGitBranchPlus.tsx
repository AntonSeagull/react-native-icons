

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitBranchPlus = (props: IconProps) => {

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
          <Path  d="M6 3v12" />
          <Path  d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <Path  d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <Path  d="M15 6a9 9 0 0 0-9 9" />
          <Path  d="M18 15v6" />
          <Path  d="M21 18h-6" />
        </G>
      </Svg>
    );
  }

