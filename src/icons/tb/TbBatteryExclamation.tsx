

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBatteryExclamation = (props: IconProps) => {

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
          <Path  d="M9 17h8c1.105 0 2 -.895 2 -2v-.5c0 -.276 .224 -.5 .5 -.5s.5 -.224 .5 -.5v-3c0 -.276 -.224 -.5 -.5 -.5s-.5 -.224 -.5 -.5v-.5c0 -1.105 -.895 -2 -2 -2h-11c-1.105 0 -2 .895 -2 2v3" />
          <Path  d="M5 16v3" />
          <Path  d="M5 22v.01" />
        </G>
      </Svg>
    );
  }

