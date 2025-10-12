

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalWifiStatusbar1Bar = (props: IconProps) => {

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
          
          <Path  d="M17.65,15.34L24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98l6.35,6.36 C7.8,13.89,9.79,13,12,13S16.2,13.89,17.65,15.34z" fillOpacity=".3" />
          <Path  d="M17.65,15.34C16.2,13.89,14.21,13,12,13s-4.2,0.89-5.65,2.34L12,21L17.65,15.34z" />
        </G>
      </Svg>
    );
  }

