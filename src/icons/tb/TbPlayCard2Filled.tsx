

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlayCard2Filled = (props: IconProps) => {

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
          <Path  d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-4.01 -10h-3a1 1 0 1 0 0 2h3v1h-2a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h3a1 1 0 0 0 0 -2h-3v-1h2a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2m-5.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
        </G>
      </Svg>
    );
  }

