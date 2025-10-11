

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTopologyStarRing3 = (props: IconProps) => {

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
          <Path  d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M6 12h4" />
          <Path  d="M14 12h4" />
          <Path  d="M15 7l-2 3" />
          <Path  d="M9 7l2 3" />
          <Path  d="M11 14l-2 3" />
          <Path  d="M13 14l2 3" />
          <Path  d="M10 5h4" />
          <Path  d="M10 19h4" />
          <Path  d="M17 17l2 -3" />
          <Path  d="M19 10l-2 -3" />
          <Path  d="M7 7l-2 3" />
          <Path  d="M5 14l2 3" />
        </G>
      </Svg>
    );
  }

