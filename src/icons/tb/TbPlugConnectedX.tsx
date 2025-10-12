

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlugConnectedX = (props: IconProps) => {

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
          <Path  d="M20 16l-4 4" />
          <Path  d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
          <Path  d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
          <Path  d="M3 21l2.5 -2.5" />
          <Path  d="M18.5 5.5l2.5 -2.5" />
          <Path  d="M10 11l-2 2" />
          <Path  d="M13 14l-2 2" />
          <Path  d="M16 16l4 4" />
        </G>
      </Svg>
    );
  }

