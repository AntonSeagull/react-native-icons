

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapRoute = (props: IconProps) => {

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
          <Path  d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
          <Path  d="M9 12v.01" />
          <Path  d="M6 13v.01" />
          <Path  d="M17 15l-4 -4" />
          <Path  d="M13 15l4 -4" />
        </G>
      </Svg>
    );
  }

