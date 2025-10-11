

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBluetoothOff = (props: IconProps) => {

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
          <Path d="m17 17-5 5V12l-5 5" />
          <Path d="m2 2 20 20" />
          <Path d="M14.5 9.5 17 7l-5-5v4.5" />
        </G>
      </Svg>
    );
  }

