

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutListThumb = (props: IconProps) => {

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
          <Path  d="M15 4h-9v-1h9v1zM6 5v1h11v-1h-11zM0 2h5v5h-5v-5zM1 6h3v-3h-3v3zM15 10h-9v1h9v-1zM6 13h11v-1h-11v1zM0 9h5v5h-5v-5zM1 13h3v-3h-3v3z" />
        </G>
      </Svg>
    );
  }

