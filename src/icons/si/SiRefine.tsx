

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiRefine = (props: IconProps) => {

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
          <Path  d="M13.789.422a4.001 4.001 0 0 0-3.578 0l-8 4A4.0011 4.0011 0 0 0 0 8v8c0 1.515.856 2.9 2.211 3.578l8 4a4.001 4.001 0 0 0 3.578 0l8-4A4.0011 4.0011 0 0 0 24 16V8c0-1.515-.856-2.9-2.211-3.578l-8-4ZM8 8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 2.209-1.791 4-4 4s-4-1.791-4-4V8Zm6 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" />
        </G>
      </Svg>
    );
  }

