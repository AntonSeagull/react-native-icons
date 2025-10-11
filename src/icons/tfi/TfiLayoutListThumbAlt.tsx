

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutListThumbAlt = (props: IconProps) => {

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
          <Path d="M15 5h-9v-1h9v1zM6 6v1h11v-1h-11zM0 8h5v-5h-5v5zM15 11h-9v1h9v-1zM6 14h11v-1h-11v1zM0 15h5v-5h-5v5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

