

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretLineDownBold = (props: IconProps) => {

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
          <Path d="M39.51,80.49a12,12,0,0,1,17-17L128,135l71.51-71.52a12,12,0,0,1,17,17l-80,80a12,12,0,0,1-17,0ZM208,180H48a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

