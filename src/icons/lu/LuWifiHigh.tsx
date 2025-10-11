

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWifiHigh = (props: IconProps) => {

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
          <Path d="M12 20h.01" />
          <Path d="M5 12.859a10 10 0 0 1 14 0" />
          <Path d="M8.5 16.429a5 5 0 0 1 7 0" />
        </G>
      </Svg>
    );
  }

