

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalWifiStatusbarConnectedNoInternet2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0,0h24v24H0V0z" fill="none" />
          <Path  d="M17,11.21V8h5.92C19.97,5.51,16.16,4,12,4C7.31,4,3.07,5.9,0,8.98l4.23,4.24C6.22,11.23,8.97,10,12,10 C13.8,10,15.5,10.44,17,11.21z" fillOpacity=".3" />
          <Path  d="M4.23,13.22L12,21l5-5.01v-4.78C15.5,10.44,13.8,10,12,10C8.97,10,6.22,11.23,4.23,13.22z" />
        </G>
      </Svg>
    );
  }

