

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUserUp = (props: IconProps) => {

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
          <Path  d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <Path  d="M6 21v-2a4 4 0 0 1 4 -4h4" />
          <Path  d="M19 22v-6" />
          <Path  d="M22 19l-3 -3l-3 3" />
        </G>
      </Svg>
    );
  }

