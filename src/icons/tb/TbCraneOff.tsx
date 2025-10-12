

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCraneOff = (props: IconProps) => {

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
          <Path  d="M6 21h6" />
          <Path  d="M9 21v-12" />
          <Path  d="M9 5v-2l-1 1" />
          <Path  d="M6 6l-3 3h6" />
          <Path  d="M13 9h8" />
          <Path  d="M9 3l10 6" />
          <Path  d="M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

