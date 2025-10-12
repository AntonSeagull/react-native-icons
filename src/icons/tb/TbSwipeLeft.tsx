

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwipeLeft = (props: IconProps) => {

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
          <Path  d="M20 12a4 4 0 1 0 -8 0a4 4 0 0 0 8 0z" />
          <Path  d="M12 12h-8" />
          <Path  d="M7 15l-3 -3l3 -3" />
        </G>
      </Svg>
    );
  }

