

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFlaskOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9 3h6" />
          <Path d="M13 9h1" />
          <Path d="M10 3v3m-.268 3.736l-3.732 10.264a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-1.143 -3.142m-2.288 -6.294l-.569 -1.564v-6" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

