

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSortAZ = (props: IconProps) => {

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
          <Path  d="M16 8h4l-4 8h4" />
          <Path  d="M4 16v-6a2 2 0 1 1 4 0v6" />
          <Path  d="M4 13h4" />
          <Path  d="M11 12h2" />
        </G>
      </Svg>
    );
  }

