

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalWifiStatusbar3Bar = (props: IconProps) => {

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
          
          <Path  d="M21.18,11.8L24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98l2.82,2.82C5.17,9.45,8.41,8,12,8 S18.83,9.45,21.18,11.8z" fillOpacity=".3" />
          <Path  d="M21.18,11.8C18.83,9.45,15.59,8,12,8s-6.83,1.45-9.18,3.8L12,21L21.18,11.8z" />
        </G>
      </Svg>
    );
  }

