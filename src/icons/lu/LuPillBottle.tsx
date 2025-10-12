

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPillBottle = (props: IconProps) => {

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
          <Path  d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
          <Path  d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
        </G>
      </Svg>
    );
  }

