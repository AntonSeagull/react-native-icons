

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalWifiConnectedNoInternet1 = (props: IconProps) => {

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
          <Path d="M0,0h24v24H0V0z" fill="none" />
          <Path d="M12,12h8.99L24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98l6.35,6.36 C7.79,13.89,9.79,13,12,13V12z" />
          <Path d="M12,21v-8c-2.21,0-4.2,0.89-5.65,2.34L12,21z M21,15.41L19.59,14l-2.09,2.09L15.41,14L14,15.41l2.09,2.09L14,19.59 L15.41,21l2.09-2.08L19.59,21L21,19.59l-2.08-2.09L21,15.41z" />
        </G>
      </Svg>
    );
  }

