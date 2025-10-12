

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquareParkingOff = (props: IconProps) => {

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
          <Path  d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" />
          <Path  d="M3 8.7V19a2 2 0 0 0 2 2h10.3" />
          <Path  d="m2 2 20 20" />
          <Path  d="M13 13a3 3 0 1 0 0-6H9v2" />
          <Path  d="M9 17v-2.3" />
        </G>
      </Svg>
    );
  }

