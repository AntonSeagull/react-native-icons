

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalWifiStatusbar2Bar = (props: IconProps) => {

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
          <Path d="M19.77,13.22L24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98l4.23,4.24 C6.22,11.23,8.97,10,12,10S17.78,11.23,19.77,13.22z" />
          <Path d="M19.77,13.22C17.78,11.23,15.03,10,12,10s-5.78,1.23-7.77,3.22L12,21L19.77,13.22z" />
        </G>
      </Svg>
    );
  }

