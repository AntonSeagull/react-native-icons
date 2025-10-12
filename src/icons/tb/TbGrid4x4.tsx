

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGrid4x4 = (props: IconProps) => {

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
          <Path  d="M3 6h18" />
          <Path  d="M3 12h18" />
          <Path  d="M3 18h18" />
          <Path  d="M6 3v18" />
          <Path  d="M12 3v18" />
          <Path  d="M18 3v18" />
        </G>
      </Svg>
    );
  }

