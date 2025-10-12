

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imoad2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0 14h16v1h-16zM16 12v1h-16v-1l2-4h4v2h4v-2h4zM3.5 5l4.5-4.5 4.5 4.5h-3.5v4h-2v-4z" />
        </G>
      </Svg>
    );
  }

