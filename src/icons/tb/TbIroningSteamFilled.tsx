

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIroningSteamFilled = (props: IconProps) => {

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
          <Path  d="M12 18a1 1 0 0 1 1 1v2a1 1 0 0 1 -2 0v-2a1 1 0 0 1 1 -1" />
          <Path  d="M16.459 3a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865a2 2 0 0 1 -1.971 2.328h-16.82a1 1 0 0 1 -1 -1a8 8 0 0 1 8 -8h8.652l-.22 -1.329a2 2 0 0 0 -1.811 -1.665l-.162 -.006h-7.459a1 1 0 1 1 0 -2z" />
          <Path  d="M7.106 18.553a1 1 0 0 1 1.788 .894l-1 2a1 1 0 0 1 -1.788 -.894z" />
          <Path  d="M15.553 18.106a1 1 0 0 1 1.341 .447l1 2a1 1 0 0 1 -1.788 .894l-1 -2a1 1 0 0 1 .447 -1.341" />
        </G>
      </Svg>
    );
  }

