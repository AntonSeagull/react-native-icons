

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalWifiStatusbarConnectedNoInternet1 = (props: IconProps) => {

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
          <Path d="M17,14.76V8h5.92C19.97,5.51,16.16,4,12,4C7.31,4,3.07,5.9,0,8.98l6.35,6.36C7.8,13.89,9.79,13,12,13 C13.89,13,15.63,13.66,17,14.76z" />
          <Path d="M6.35,15.34L12,21l5-5.01v-1.23c-1.37-1.1-3.11-1.76-5-1.76C9.79,13,7.8,13.89,6.35,15.34z" />
        </G>
      </Svg>
    );
  }

