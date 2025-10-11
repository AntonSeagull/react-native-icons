

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLetterCircleH = (props: IconProps) => {

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
          <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM168,88v80a8,8,0,0,1-16,0V136H104v32a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0v32h48V88a8,8,0,0,1,16,0Z" />
        </G>
      </Svg>
    );
  }

