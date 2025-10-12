

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBellElectric = (props: IconProps) => {

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
          <Circle  cx="20" cy="16" r="2" />
          <Circle  cx="9" cy="9" r="7" />
          <Path  d="M18.518 17.347A7 7 0 0 1 14 19" />
          <Path  d="M18.8 4A11 11 0 0 1 20 9" />
          <Path  d="M9 9h.01" />
        </G>
      </Svg>
    );
  }

