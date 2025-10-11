

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiG2g = (props: IconProps) => {

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
          <Path d="M0 0v4.357h19.643v6.43H24V0H0zm0 6.44V24h24V12.805H6.648v4.36h12.995v2.478H4.357v-8.846h12.995V6.439H0z" />
        </G>
      </Svg>
    );
  }

