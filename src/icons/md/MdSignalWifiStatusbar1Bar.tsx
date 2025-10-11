

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalWifiStatusbar1Bar = (props: IconProps) => {

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
          <Path d="M17.65,15.34L24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98l6.35,6.36 C7.8,13.89,9.79,13,12,13S16.2,13.89,17.65,15.34z" />
          <Path d="M17.65,15.34C16.2,13.89,14.21,13,12,13s-4.2,0.89-5.65,2.34L12,21L17.65,15.34z" />
        </G>
      </Svg>
    );
  }

