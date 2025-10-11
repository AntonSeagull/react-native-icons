

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutGrid3 = (props: IconProps) => {

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
          <Path  d="M0 5h5v-5h-5v5zM1 1h3v3h-3v-3zM6 5h5v-5h-5v5zM7 1h3v3h-3v-3zM12 0v5h5v-5h-5zM16 4h-3v-3h3v3zM0 11h5v-5h-5v5zM1 7h3v3h-3v-3zM6 11h5v-5h-5v5zM7 7h3v3h-3v-3zM12 11h5v-5h-5v5zM13 7h3v3h-3v-3zM0 17h5v-5h-5v5zM1 13h3v3h-3v-3zM6 17h5v-5h-5v5zM7 13h3v3h-3v-3zM12 17h5v-5h-5v5zM13 13h3v3h-3v-3z" />
        </G>
      </Svg>
    );
  }

