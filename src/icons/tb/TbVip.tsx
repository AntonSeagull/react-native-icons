

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbVip = (props: IconProps) => {

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
          <Path  d="M3 5h18" />
          <Path  d="M3 19h18" />
          <Path  d="M4 9l2 6h1l2 -6" />
          <Path  d="M12 9v6" />
          <Path  d="M16 15v-6h2a2 2 0 1 1 0 4h-2" />
        </G>
      </Svg>
    );
  }

