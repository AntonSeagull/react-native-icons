

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTools = (props: IconProps) => {

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
          <Path  d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
          <Path  d="M14.5 5.5l4 4" />
          <Path  d="M12 8l-5 -5l-4 4l5 5" />
          <Path  d="M7 8l-1.5 1.5" />
          <Path  d="M16 12l5 5l-4 4l-5 -5" />
          <Path  d="M16 17l-1.5 1.5" />
        </G>
      </Svg>
    );
  }

