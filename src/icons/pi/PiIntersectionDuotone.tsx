

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiIntersectionDuotone = (props: IconProps) => {

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
          <Path d="M200,120v80H56V120a72,72,0,0,1,144,0Z" />
          <Path d="M208,120v80a8,8,0,0,1-16,0V120a64,64,0,0,0-128,0v80a8,8,0,0,1-16,0V120a80,80,0,0,1,160,0Z" />
        </G>
      </Svg>
    );
  }

