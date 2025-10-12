

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitCompare = (props: IconProps) => {

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
          <Path  d="M13 6h3a2 2 0 0 1 2 2v7" />
          <Path  d="M11 18H8a2 2 0 0 1-2-2V9" />
        </G>
      </Svg>
    );
  }

