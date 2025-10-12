

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMinimize = (props: IconProps) => {

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
          <Path  d="M15 19v-2a2 2 0 0 1 2 -2h2" />
          <Path  d="M15 5v2a2 2 0 0 0 2 2h2" />
          <Path  d="M5 15h2a2 2 0 0 1 2 2v2" />
          <Path  d="M5 9h2a2 2 0 0 0 2 -2v-2" />
        </G>
      </Svg>
    );
  }

