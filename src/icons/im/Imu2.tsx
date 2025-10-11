

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imu2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 22 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 3h14v3h-14v-3zM0 7h14v3h-14v-3zM0 11h14v3h-14v-3z" fill="#000000" />
          <Path d="M15.5 9l3 3 3-3z" fill="#000000" />
          <Path d="M21.5 8l-3-3-3 3z" fill="#000000" />
        </G>
      </Svg>
    );
  }

