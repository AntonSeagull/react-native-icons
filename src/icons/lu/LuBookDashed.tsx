

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBookDashed = (props: IconProps) => {

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
          <Path  d="M12 17h1.5" />
          <Path  d="M12 22h1.5" />
          <Path  d="M12 2h1.5" />
          <Path  d="M17.5 22H19a1 1 0 0 0 1-1" />
          <Path  d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
          <Path  d="M20 14v3h-2.5" />
          <Path  d="M20 8.5V10" />
          <Path  d="M4 10V8.5" />
          <Path  d="M4 19.5V14" />
          <Path  d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
          <Path  d="M8 22H6.5a1 1 0 0 1 0-5H8" />
        </G>
      </Svg>
    );
  }

