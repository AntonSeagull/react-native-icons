

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRouteOff = (props: IconProps) => {

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
          <Path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
          <Path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
          <Path d="m2 2 20 20" />
          <Path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
          <Path d="M15 5h-4.3" />
        </G>
      </Svg>
    );
  }

