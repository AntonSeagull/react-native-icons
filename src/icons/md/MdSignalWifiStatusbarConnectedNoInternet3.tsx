

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalWifiStatusbarConnectedNoInternet3 = (props: IconProps) => {

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
          
          <Path  d="M17,9V8h5.92C19.97,5.51,16.16,4,12,4C7.31,4,3.07,5.9,0,8.98l2.82,2.82C5.17,9.45,8.41,8,12,8 C13.77,8,15.46,8.36,17,9z" fillOpacity=".3" />
          <Path  d="M2.82,11.8L12,21l5-5.01V9c-1.54-0.64-3.23-1-5-1C8.41,8,5.17,9.45,2.82,11.8z" />
        </G>
      </Svg>
    );
  }

