

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTransform = (props: IconProps) => {

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
          <Path  d="M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path  d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
          <Path  d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
          <Path  d="M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        </G>
      </Svg>
    );
  }

