

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWebhookOff = (props: IconProps) => {

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
          <Path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" />
          <Path d="M9 3.4a4 4 0 0 1 6.52.66" />
          <Path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" />
          <Path d="M20.3 20.3a4 4 0 0 1-2.3.7" />
          <Path d="M18.6 13a4 4 0 0 1 3.357 3.414" />
          <Path d="m12 6 .6 1" />
          <Path d="m2 2 20 20" />
        </G>
      </Svg>
    );
  }

