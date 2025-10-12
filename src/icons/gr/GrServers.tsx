

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrServers = (props: IconProps) => {

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
          <Path  fill="none" d="M7,19 L8,19 L8,18 L7,18 L7,19 Z M18,19 L19,19 L19,18 L18,18 L18,19 Z M1,23 L12,23 L12,1 L1,1 L1,23 Z M12,23 L23,23 L23,1 L12,1 L12,23 Z M4,5 L9,5 L4,5 Z M15,5 L20,5 L15,5 Z M4,9 L9,9 L4,9 Z M15,9 L20,9 L15,9 Z M4,13 L9,13 L4,13 Z M15,13 L20,13 L15,13 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

