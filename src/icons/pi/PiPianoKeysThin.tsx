

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPianoKeysThin = (props: IconProps) => {

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
          <Path  d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM76,44h32v96H76Zm36,104a4,4,0,0,0,4-4V44h24V144a4,4,0,0,0,4,4h12v64H100V148Zm36-8V44h32v96ZM44,208V48a4,4,0,0,1,4-4H68V144a4,4,0,0,0,4,4H92v64H48A4,4,0,0,1,44,208Zm168,0a4,4,0,0,1-4,4H164V148h20a4,4,0,0,0,4-4V44h20a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

