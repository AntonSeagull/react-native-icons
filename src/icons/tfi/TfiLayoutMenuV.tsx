

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMenuV = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3 1v3h11v-3h-11zM13 3h-9v-1h9v1zM3 8h11v-3h-11v3zM4 6h9v1h-9v-1zM3 11.997h11v-3h-11v3zM4 9.997h9v1h-9v-1zM3 15.997h11v-3h-11v3zM4 13.997h9v1h-9v-1z" />
        </G>
      </Svg>
    );
  }

