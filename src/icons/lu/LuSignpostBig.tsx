

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSignpostBig = (props: IconProps) => {

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
          <Path  d="M10 9H4L2 7l2-2h6" />
          <Path  d="M14 5h6l2 2-2 2h-6" />
          <Path  d="M10 22V4a2 2 0 1 1 4 0v18" />
          <Path  d="M8 22h8" />
        </G>
      </Svg>
    );
  }

