

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiEggPod = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M256 16c-67.5 0-105 120-105 210 0 45 45 90 105 90s105-45 105-90c0-90-37.5-210-105-210zM136 271c0 90 45 75 45 135 0 90-75 60-75 90h300c0-30-75 0-75-90 0-60 45-45 45-135-90 105-150 105-240 0z" fill="#000" />
        </G>
      </Svg>
    );
  }

