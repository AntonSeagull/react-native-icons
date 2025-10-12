

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquareDashedMousePointer = (props: IconProps) => {

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
          <Path  d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
          <Path  d="M5 3a2 2 0 0 0-2 2" />
          <Path  d="M19 3a2 2 0 0 1 2 2" />
          <Path  d="M5 21a2 2 0 0 1-2-2" />
          <Path  d="M9 3h1" />
          <Path  d="M9 21h2" />
          <Path  d="M14 3h1" />
          <Path  d="M3 9v1" />
          <Path  d="M21 9v2" />
          <Path  d="M3 14v1" />
        </G>
      </Svg>
    );
  }

