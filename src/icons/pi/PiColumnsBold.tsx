

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiColumnsBold = (props: IconProps) => {

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
          <Path  d="M100,28H64A20,20,0,0,0,44,48V208a20,20,0,0,0,20,20h36a20,20,0,0,0,20-20V48A20,20,0,0,0,100,28ZM96,204H68V52H96ZM192,28H156a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h36a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Zm-4,176H160V52h28Z" />
        </G>
      </Svg>
    );
  }

