

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrWifiNone = (props: IconProps) => {

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
          <Circle  cx="12" cy="18" r="2" strokeWidth="2" />
          <Path  d="M7.75735931,13.7573593 C10.1005051,11.4142136 13.8994949,11.4142136 16.2426407,13.7573593 M4.92893219,10.9289322 C8.83417511,7.02368927 15.1658249,7.02368927 19.0710678,10.9289322 M2.10050506,8.10050506 C7.56784515,2.63316498 16.4321549,2.63316498 21.8994949,8.10050506" opacity=".8" strokeOpacity=".2" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

