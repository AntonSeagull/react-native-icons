

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquareDashedTopSolid = (props: IconProps) => {

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
          <Path  d="M14 21h1" />
          <Path  d="M21 14v1" />
          <Path  d="M21 19a2 2 0 0 1-2 2" />
          <Path  d="M21 9v1" />
          <Path  d="M3 14v1" />
          <Path  d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
          <Path  d="M3 9v1" />
          <Path  d="M5 21a2 2 0 0 1-2-2" />
          <Path  d="M9 21h1" />
        </G>
      </Svg>
    );
  }

