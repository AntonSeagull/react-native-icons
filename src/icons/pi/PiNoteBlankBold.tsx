

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNoteBlankBold = (props: IconProps) => {

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
          <Path  d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H156.69a19.86,19.86,0,0,0,14.14-5.86l51.31-51.31A19.86,19.86,0,0,0,228,156.69V48A20,20,0,0,0,208,28ZM52,52H204v92H156a12,12,0,0,0-12,12v48H52ZM168,191V168h23Z" />
        </G>
      </Svg>
    );
  }

