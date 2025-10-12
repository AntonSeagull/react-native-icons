

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCactus = (props: IconProps) => {

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
          <Path  d="M6 9v1a3 3 0 0 0 3 3h1" />
          <Path  d="M18 8v5a3 3 0 0 1 -3 3h-1" />
          <Path  d="M10 21v-16a2 2 0 1 1 4 0v16" />
          <Path  d="M7 21h10" />
        </G>
      </Svg>
    );
  }

