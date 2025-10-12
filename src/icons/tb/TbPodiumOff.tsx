

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPodiumOff = (props: IconProps) => {

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
          <Path  d="M12 8h7l-.621 2.485a2 2 0 0 1 -1.94 1.515h-.439m-4 0h-4.439a2 2 0 0 1 -1.94 -1.515l-.621 -2.485h3" />
          <Path  d="M7 8v-1m.864 -3.106a2.99 2.99 0 0 1 2.136 -.894" />
          <Path  d="M8 12l1 9" />
          <Path  d="M15.599 15.613l-.599 5.387" />
          <Path  d="M7 21h10" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

