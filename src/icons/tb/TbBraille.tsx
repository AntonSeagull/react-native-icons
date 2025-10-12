

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBraille = (props: IconProps) => {

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
          <Path  d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
          <Path  d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
          <Path  d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
          <Path  d="M16 12h.01" />
          <Path  d="M8 12h.01" />
          <Path  d="M16 19h.01" />
        </G>
      </Svg>
    );
  }

