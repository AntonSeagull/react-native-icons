

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleArrowDown = (props: IconProps) => {

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
          <Path  d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <Path  d="M8 12l4 4" />
          <Path  d="M12 8v8" />
          <Path  d="M16 12l-4 4" />
        </G>
      </Svg>
    );
  }

