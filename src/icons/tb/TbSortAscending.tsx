

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSortAscending = (props: IconProps) => {

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
          <Path  d="M4 6l7 0" />
          <Path  d="M4 12l7 0" />
          <Path  d="M4 18l9 0" />
          <Path  d="M15 9l3 -3l3 3" />
          <Path  d="M18 6l0 12" />
        </G>
      </Svg>
    );
  }

