

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldPlus = (props: IconProps) => {

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
          <Path  d="M20.985 12.518a9 9 0 1 0 -8.45 8.466" />
          <Path  d="M3.6 9h16.8" />
          <Path  d="M3.6 15h11.4" />
          <Path  d="M11.5 3a17 17 0 0 0 0 18" />
          <Path  d="M12.5 3a16.998 16.998 0 0 1 2.283 12.157" />
          <Path  d="M16 19h6" />
          <Path  d="M19 16v6" />
        </G>
      </Svg>
    );
  }

