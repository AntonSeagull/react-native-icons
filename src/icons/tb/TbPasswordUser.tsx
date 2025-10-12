

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPasswordUser = (props: IconProps) => {

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
          <Path  d="M12 17v4" />
          <Path  d="M10 20l4 -2" />
          <Path  d="M10 18l4 2" />
          <Path  d="M5 17v4" />
          <Path  d="M3 20l4 -2" />
          <Path  d="M3 18l4 2" />
          <Path  d="M19 17v4" />
          <Path  d="M17 20l4 -2" />
          <Path  d="M17 18l4 2" />
          <Path  d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path  d="M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2" />
        </G>
      </Svg>
    );
  }

