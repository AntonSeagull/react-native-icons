

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEaseInControlPoint = (props: IconProps) => {

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
          <Path  d="M3 19c8 0 18 -16 18 -16" />
          <Path  d="M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
          <Path  d="M17 19h-2" />
          <Path  d="M12 19h-2" />
        </G>
      </Svg>
    );
  }

