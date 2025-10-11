

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFileReport = (props: IconProps) => {

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
          <Path  d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path  d="M17 13v4h4" />
          <Path  d="M12 3v4a1 1 0 0 0 1 1h4" />
          <Path  d="M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" />
        </G>
      </Svg>
    );
  }

