

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUniteSquareThin = (props: IconProps) => {

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
          <Path  d="M216,92H164V40a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V160a4,4,0,0,0,4,4H92v52a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4V96A4,4,0,0,0,216,92ZM153.66,212,44,102.34V49.66L206.34,212ZM49.66,44h52.68L212,153.66v52.68ZM212,142.34,169.66,100H212Zm-56-56L113.66,44H156ZM44,113.66,86.34,156H44Zm56,56L142.34,212H100Z" />
        </G>
      </Svg>
    );
  }

