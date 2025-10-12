

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArchive = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M17 2h-17v4h1v11h15v-11h1v-4zM15 16h-13v-10h13v10zM16 5h-15v-2h15v2zM6 11h5.016c1.103 0 2-0.897 2-2s-0.897-2-2-2h-5.016c-1.103 0-2 0.897-2 2s0.897 2 2 2zM6 8h5.016c0.552 0 1 0.448 1 1s-0.448 1-1 1h-5.016c-0.552 0-1-0.448-1-1s0.448-1 1-1z" />
        </G>
      </Svg>
    );
  }

