

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBluetoothSearching = (props: IconProps) => {

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
          <Path d="m7 7 10 10-5 5V2l5 5L7 17" />
          <Path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
          <Path d="M18 12h.01" />
        </G>
      </Svg>
    );
  }

