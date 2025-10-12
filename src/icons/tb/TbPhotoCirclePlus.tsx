

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoCirclePlus = (props: IconProps) => {

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
          <Path  d="M15 8h.01" />
          <Path  d="M20.964 12.806a9 9 0 0 0 -8.964 -9.806a9 9 0 0 0 -9 9a9 9 0 0 0 9.397 8.991" />
          <Path  d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" />
          <Path  d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
          <Path  d="M16 19.33h6" />
          <Path  d="M19 16.33v6" />
        </G>
      </Svg>
    );
  }

