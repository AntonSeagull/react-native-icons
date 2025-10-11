

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSatellite = (props: IconProps) => {

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
          <Path  fill="none" d="M7,17 C2.97059067,12.7941347 2.97059067,6.11763731 7,2 L22,17 C17.8823627,21.0294093 11.2058653,21.0294093 7,17 Z M7,17 C3.705,17 1,19.9491525 1,23 L13,23 C13,21.8610169 12.63,20.9661017 12,20 M15,9 L19,5 L15,9 Z M20.5,1 C19.119,1 18,2.119 18,3.5 C18,4.881 19.119,6 20.5,6 C21.881,6 23,4.881 23,3.5 C23,2.119 21.881,1 20.5,1 L20.5,1 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

