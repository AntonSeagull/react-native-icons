

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTimeDuration30 = (props: IconProps) => {

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
          <Path  d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
          <Path  d="M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
          <Path  d="M3 12v.01" />
          <Path  d="M7.5 4.2v.01" />
          <Path  d="M7.5 19.8v.01" />
          <Path  d="M4.2 16.5v.01" />
          <Path  d="M4.2 7.5v.01" />
          <Path  d="M12 21a9 9 0 0 0 0 -18" />
        </G>
      </Svg>
    );
  }

