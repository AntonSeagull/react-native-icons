

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowRightDuotone = (props: IconProps) => {

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
          <Path  d="M232,80v72L160,80Z" opacity="0.2" />
          <Path  d="M232,72H160a8,8,0,0,0-5.66,13.66L184.69,116,120,180.69,29.66,90.34a8,8,0,0,0-11.32,11.32l96,96a8,8,0,0,0,11.32,0L196,127.31l30.34,30.35A8,8,0,0,0,240,152V80A8,8,0,0,0,232,72Zm-8,60.69L179.31,88H224Z" />
        </G>
      </Svg>
    );
  }

