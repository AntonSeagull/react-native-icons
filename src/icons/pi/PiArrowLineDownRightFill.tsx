

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineDownRightFill = (props: IconProps) => {

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
          <Path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM195.06,96.61a8,8,0,0,0-8.72,1.73L144,140.69,85.66,82.34A8,8,0,0,0,74.34,93.66L132.69,152,90.34,194.34A8,8,0,0,0,96,208h96a8,8,0,0,0,8-8V104A8,8,0,0,0,195.06,96.61Z" />
        </G>
      </Svg>
    );
  }

