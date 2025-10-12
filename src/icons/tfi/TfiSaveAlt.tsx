

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiSaveAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M15.5 0h-12.664l-2.836 2.776v12.724c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM13 1v2h-8v-2h8zM3 16v-1h11v1h-11zM16 15.5c0 0.275-0.224 0.5-0.5 0.5h-0.5v-2h-13v2h-0.5c-0.276 0-0.5-0.225-0.5-0.5v-12.304l2.244-2.196h0.756v3h10v-3h1.5c0.276 0 0.5 0.225 0.5 0.5v14zM8.5 5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM8.5 11c-1.378 0-2.5-1.121-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.122 2.5-2.5 2.5z" />
        </G>
      </Svg>
    );
  }

