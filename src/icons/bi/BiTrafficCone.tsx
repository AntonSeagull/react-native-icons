

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiTrafficCone = (props: IconProps) => {

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
          <Path  d="M13.943 2.667A1 1 0 0 0 13 2h-2a1 1 0 0 0-.943.667L4.292 19H2v2h20v-2h-2.292L13.943 2.667zM15.47 13H8.53l1.06-3h4.82l1.06 3zm-3.763-9h.586l1.412 4h-3.41l1.412-4zM7.825 15h8.35l1.412 4H6.413l1.412-4z" />
        </G>
      </Svg>
    );
  }

