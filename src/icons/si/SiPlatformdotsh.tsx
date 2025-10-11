

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPlatformdotsh = (props: IconProps) => {

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
          <Path d="M24 0H0v9.541h24V0zM24 20.755H0V24h24v-3.245zM0 12.618h24v4.892H0v-4.892z" />
        </G>
      </Svg>
    );
  }

