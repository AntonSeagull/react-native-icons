

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPilcrowRight = (props: IconProps) => {

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
          <Path  d="M11 9h-2a3 3 0 1 1 0 -6h7" />
          <Path  d="M11 3v11" />
          <Path  d="M15 3v11" />
          <Path  d="M21 18h-18" />
          <Path  d="M18 15l3 3l-3 3" />
        </G>
      </Svg>
    );
  }

