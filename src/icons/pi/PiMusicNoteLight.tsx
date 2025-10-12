

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMusicNoteLight = (props: IconProps) => {

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
          <Path  d="M209.72,58.25l-80-24A6,6,0,0,0,122,40V153.05A46,46,0,1,0,134,184V96.06l72.28,21.69A6,6,0,0,0,214,112V64A6,6,0,0,0,209.72,58.25ZM88,218a34,34,0,1,1,34-34A34,34,0,0,1,88,218ZM202,103.94l-68-20.4V48.06l68,20.4Z" />
        </G>
      </Svg>
    );
  }

