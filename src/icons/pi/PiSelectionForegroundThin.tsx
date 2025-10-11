

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSelectionForegroundThin = (props: IconProps) => {

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
          <Path  d="M60,216a4,4,0,0,1-4,4H48a12,12,0,0,1-12-12v-8a4,4,0,0,1,8,0v8a4,4,0,0,0,4,4h8A4,4,0,0,1,60,216Zm52-4H96a4,4,0,0,0,0,8h16a4,4,0,0,0,0-8ZM40,164a4,4,0,0,0,4-4V144a4,4,0,0,0-8,0v16A4,4,0,0,0,40,164Zm128,32a4,4,0,0,0-4,4v8a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12v-8A4,4,0,0,0,168,196Zm0-88a4,4,0,0,0,4-4V96a12,12,0,0,0-12-12h-8a4,4,0,0,0,0,8h8a4,4,0,0,1,4,4v8A4,4,0,0,0,168,108ZM56,84H48A12,12,0,0,0,36,96v8a4,4,0,0,0,8,0V96a4,4,0,0,1,4-4h8a4,4,0,0,0,0-8ZM208,36H96A12,12,0,0,0,84,48V88h0a4,4,0,0,0,4,4h24a4,4,0,0,0,0-8H92V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4V160a4,4,0,0,1-4,4H172V144a4,4,0,0,0-8,0v24a4,4,0,0,0,3.51,3.95,2.17,2.17,0,0,0,.49.05h40a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Z" />
        </G>
      </Svg>
    );
  }

