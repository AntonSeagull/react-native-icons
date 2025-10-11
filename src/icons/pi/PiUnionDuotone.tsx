

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUnionDuotone = (props: IconProps) => {

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
          <Path d="M200,64v80a72,72,0,0,1-144,0V64Z" />
          <Path d="M208,64v80a80,80,0,0,1-160,0V64a8,8,0,0,1,16,0v80a64,64,0,0,0,128,0V64a8,8,0,0,1,16,0Z" />
        </G>
      </Svg>
    );
  }

