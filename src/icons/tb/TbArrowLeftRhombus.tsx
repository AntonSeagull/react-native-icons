

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowLeftRhombus = (props: IconProps) => {

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
          <Path  d="M16 12h-13" />
          <Path  d="M6 9l-3 3l3 3" />
          <Path  d="M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5z" />
        </G>
      </Svg>
    );
  }

