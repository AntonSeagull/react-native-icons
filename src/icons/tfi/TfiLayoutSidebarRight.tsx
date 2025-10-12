

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutSidebarRight = (props: IconProps) => {

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
          <Path  d="M17 0v17h-5v-17h5zM9 17h1v-1h-1v1zM7.223 17h0.889v-1h-0.889v1zM1.889 17h0.889v-1h-0.889v1zM3.667 17h0.889v-1h-0.889v1zM5.445 17h0.889v-1h-0.889v1zM0 17h1v-1h-1v1zM0 9h1v-1h-1v1zM0 3h1v-1h-1v1zM0 11h1v-1h-1v1zM0 7h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 5h1v-1h-1v1zM0 1h1v-1h-1v1zM8.111 0h-0.889v1h0.889v-1zM6.333 0h-0.889v1h0.889v-1zM2.777 0h-0.888v1h0.889v-1zM4.555 0h-0.888v1h0.889v-1zM9 1h1v-1h-1v1zM9 15h1v-1h-1v1zM9 13h1v-1h-1v1zM9 9h1v-1h-1v1zM9 11h1v-1h-1v1zM9 5h1v-1h-1v1zM9 7h1v-1h-1v1zM9 3h1v-1h-1v1z" />
        </G>
      </Svg>
    );
  }

