

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTimeDuration10 = (props: IconProps) => {

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
          <Path  d="M9 9v6" />
          <Path  d="M12 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
          <Path  d="M3 12v.01" />
          <Path  d="M21 12v.01" />
          <Path  d="M12 21v.01" />
          <Path  d="M7.5 4.2v.01" />
          <Path  d="M16.5 19.8v.01" />
          <Path  d="M7.5 19.8v.01" />
          <Path  d="M4.2 16.5v.01" />
          <Path  d="M19.8 16.5v.01" />
          <Path  d="M4.2 7.5v.01" />
          <Path  d="M19.81 7.527a8.994 8.994 0 0 0 -7.81 -4.527" />
        </G>
      </Svg>
    );
  }

