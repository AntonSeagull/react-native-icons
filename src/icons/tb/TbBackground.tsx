

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBackground = (props: IconProps) => {

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
          <Path  d="M4 8l4 -4" />
          <Path  d="M14 4l-10 10" />
          <Path  d="M4 20l16 -16" />
          <Path  d="M20 10l-10 10" />
          <Path  d="M20 16l-4 4" />
        </G>
      </Svg>
    );
  }

