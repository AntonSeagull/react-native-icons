

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGlassChampagne = (props: IconProps) => {

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
          <Path  d="M9 21h6" />
          <Path  d="M12 16v5" />
          <Path  d="M12 5m-4 0a4 2 0 1 0 8 0a4 2 0 1 0 -8 0" />
          <Path  d="M8 5c0 6.075 1.79 11 4 11s4 -4.925 4 -11" />
        </G>
      </Svg>
    );
  }

