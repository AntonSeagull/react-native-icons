

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShovelPitchforks = (props: IconProps) => {

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
          <Path  d="M5 3h4" />
          <Path  d="M7 3v12" />
          <Path  d="M4 15h6v3a3 3 0 0 1 -6 0v-3z" />
          <Path  d="M14 21v-3a3 3 0 0 1 6 0v3" />
          <Path  d="M17 21v-18" />
        </G>
      </Svg>
    );
  }

