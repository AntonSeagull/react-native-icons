

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiProjectorScreenBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M236,72V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V72A20,20,0,0,0,36,91.6V164H32a12,12,0,0,0,0,24h84v23.22a24,24,0,1,0,24,0V188h84a12,12,0,0,0,0-24h-4V91.6A20,20,0,0,0,236,72ZM44,52H212V68H44ZM60,164V92H196v72Z" />
        </G>
      </Svg>
    );
  }

