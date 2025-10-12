

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingSkyscraper = (props: IconProps) => {

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
          <Path  d="M3 21l18 0" />
          <Path  d="M5 21v-14l8 -4v18" />
          <Path  d="M19 21v-10l-6 -4" />
          <Path  d="M9 9l0 .01" />
          <Path  d="M9 12l0 .01" />
          <Path  d="M9 15l0 .01" />
          <Path  d="M9 18l0 .01" />
        </G>
      </Svg>
    );
  }

