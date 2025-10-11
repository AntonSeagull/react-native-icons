

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBatteryWarning = (props: IconProps) => {

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
          <Path d="M10 17h.01" />
          <Path d="M10 7v6" />
          <Path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
          <Path d="M22 14v-4" />
          <Path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
        </G>
      </Svg>
    );
  }

