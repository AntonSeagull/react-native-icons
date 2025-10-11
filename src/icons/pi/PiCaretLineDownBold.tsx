

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretLineDownBold = (props: IconProps) => {

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
          <Path  d="M39.51,80.49a12,12,0,0,1,17-17L128,135l71.51-71.52a12,12,0,0,1,17,17l-80,80a12,12,0,0,1-17,0ZM208,180H48a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

