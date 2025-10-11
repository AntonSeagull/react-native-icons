

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPushPinSimpleBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M216,164h-5.93L190.3,52H192a12,12,0,0,0,0-24H64a12,12,0,0,0,0,24h1.7L45.93,164H40a12,12,0,0,0,0,24h76v52a12,12,0,0,0,24,0V188h76a12,12,0,0,0,0-24ZM90.07,52h75.86L185.7,164H70.3Z" />
        </G>
      </Svg>
    );
  }

