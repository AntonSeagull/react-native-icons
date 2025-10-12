

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGasStationOff = (props: IconProps) => {

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
          <Path  d="M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3" />
          <Path  d="M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6" />
          <Path  d="M3 20h12" />
          <Path  d="M18 7v1a1 1 0 0 0 1 1h1" />
          <Path  d="M4 11h7" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

