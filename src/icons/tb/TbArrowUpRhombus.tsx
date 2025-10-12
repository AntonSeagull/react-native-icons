

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowUpRhombus = (props: IconProps) => {

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
          <Path  d="M12 16v-13" />
          <Path  d="M15 6l-3 -3l-3 3" />
          <Path  d="M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5z" />
        </G>
      </Svg>
    );
  }

