

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutSidebar2 = (props: IconProps) => {

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
          <Path  d="M17 0v17h-4v-17h4zM0 17h3v-17h-3v17zM11 17h1v-1h-1v1zM7.571 17h0.857v-1h-0.857v1zM9.286 17h0.857v-1h-0.857v1zM5.857 17h0.857v-1h-0.857v1zM4 17h1v-1h-1v1zM4 3h1v-1h-1v1zM4 13h1v-1h-1v1zM4 15h1v-1h-1v1zM4 11h1v-1h-1v1zM4 7h1v-1h-1v1zM4 5h1v-1h-1v1zM4 9h1v-1h-1v1zM4 1h1v-1h-1v1zM5.857 1h0.857v-1h-0.857v1zM9.286 1h0.857v-1h-0.857v1zM7.571 1h0.857v-1h-0.857v1zM11 1h1v-1h-1v1zM11 5h1v-1h-1v1zM11 3h1v-1h-1v1zM11 7h1v-1h-1v1zM11 9h1v-1h-1v1zM11 15h1v-1h-1v1zM11 13h1v-1h-1v1zM11 11h1v-1h-1v1z" />
        </G>
      </Svg>
    );
  }

