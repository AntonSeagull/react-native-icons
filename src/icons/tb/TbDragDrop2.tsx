

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDragDrop2 = (props: IconProps) => {

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
          <Path  d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
          <Path  d="M4 4l0 .01" />
          <Path  d="M8 4l0 .01" />
          <Path  d="M12 4l0 .01" />
          <Path  d="M16 4l0 .01" />
          <Path  d="M4 8l0 .01" />
          <Path  d="M4 12l0 .01" />
          <Path  d="M4 16l0 .01" />
        </G>
      </Svg>
    );
  }

