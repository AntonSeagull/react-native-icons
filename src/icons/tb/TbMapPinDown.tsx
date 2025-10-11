

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapPinDown = (props: IconProps) => {

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
          <Path  d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path  d="M12.736 21.345a2 2 0 0 1 -2.149 -.445l-4.244 -4.243a8 8 0 1 1 13.59 -4.624" />
          <Path  d="M19 16v6" />
          <Path  d="M22 19l-3 3l-3 -3" />
        </G>
      </Svg>
    );
  }

