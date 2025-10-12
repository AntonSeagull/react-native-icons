

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNoteBlankThin = (props: IconProps) => {

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
          <Path  d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H156.69a11.93,11.93,0,0,0,8.48-3.51l51.32-51.32a11.93,11.93,0,0,0,3.51-8.48V48A12,12,0,0,0,208,36ZM44,208V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4V156H160a4,4,0,0,0-4,4v52H48A4,4,0,0,1,44,208Zm120-1.66V164h42.35Z" />
        </G>
      </Svg>
    );
  }

