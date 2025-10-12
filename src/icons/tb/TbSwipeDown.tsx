

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwipeDown = (props: IconProps) => {

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
          <Path  d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
          <Path  d="M12 12v8" />
          <Path  d="M9 17l3 3l3 -3" />
        </G>
      </Svg>
    );
  }

