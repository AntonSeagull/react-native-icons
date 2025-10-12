

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiTerminalBadge = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#444444" d="M14.392 17.894h6.432v1.608h-6.432v-1.608zM9.568 19.502l4.824-4.824-4.824-4.824-1.608 1.608 3.216 3.216-3.216 3.216z" />
        </G>
      </Svg>
    );
  }

