

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiFileZipFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M10 2V4H12V2H20.0066C20.5551 2 21 2.44405 21 2.9918V21.0082C21 21.5447 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44476 2 3.9934 2H10ZM12 4V6H14V4H12ZM10 6V8H12V6H10ZM12 8V10H14V8H12ZM10 10V12H12V10H10ZM12 12V14H10V17H14V12H12Z" />
        </G>
      </Svg>
    );
  }

