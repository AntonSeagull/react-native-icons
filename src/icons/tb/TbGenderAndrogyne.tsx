

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderAndrogyne = (props: IconProps) => {

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
          <Path  d="M13 11l6 -6" />
          <Path  d="M9 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <Path  d="M19 9v-4h-4" />
          <Path  d="M16.5 10.5l-3 -3" />
        </G>
      </Svg>
    );
  }

