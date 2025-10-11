

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretLineDownFill = (props: IconProps) => {

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
          <Path d="M42.34,77.66A8,8,0,0,1,48,64H208a8,8,0,0,1,5.66,13.66l-80,80a8,8,0,0,1-11.32,0ZM208,184H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z" />
        </G>
      </Svg>
    );
  }

