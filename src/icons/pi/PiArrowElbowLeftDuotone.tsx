

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowLeftDuotone = (props: IconProps) => {

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
          <Path  d="M96,80,24,152V80Z" opacity="0.2" />
          <Path  d="M237.66,90.34a8,8,0,0,0-11.32,0L136,180.69,71.31,116l30.35-30.34A8,8,0,0,0,96,72H24a8,8,0,0,0-8,8v72a8,8,0,0,0,13.66,5.66L60,127.31l70.34,70.35a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,237.66,90.34ZM32,132.69V88H76.69Z" />
        </G>
      </Svg>
    );
  }

