

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaFileExportSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 6 4 L 6 28 L 26 28 L 26 20 L 24 22 L 24 26 L 8 26 L 8 6 L 24 6 L 24 10 L 26 12 L 26 4 Z M 22.40625 11 L 21 12.40625 L 23.5625 15 L 13.90625 15 L 13.90625 17 L 23.5625 17 L 21 19.59375 L 22.40625 21 L 26.71875 16.71875 L 27.40625 16 L 26.71875 15.28125 Z" />
        </G>
      </Svg>
    );
  }

