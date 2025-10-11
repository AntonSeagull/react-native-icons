

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMenuSeparated = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 10h5v-3h-5v3zM1 8h3v1h-3v-1zM6 10h5v-3h-5v3zM7 8h3v1h-3v-1zM12 7v3h5v-3h-5zM16 9h-3v-1h3v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

