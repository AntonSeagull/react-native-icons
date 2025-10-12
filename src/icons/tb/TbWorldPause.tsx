

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldPause = (props: IconProps) => {

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
          <Path  d="M20.945 12.997a9 9 0 1 0 -7.928 7.945" />
          <Path  d="M3.6 9h16.8" />
          <Path  d="M3.6 15h9.9" />
          <Path  d="M11.5 3a17 17 0 0 0 0 18" />
          <Path  d="M12.5 3a16.992 16.992 0 0 1 2.51 10.526" />
          <Path  d="M17 17v5" />
          <Path  d="M21 17v5" />
        </G>
      </Svg>
    );
  }

