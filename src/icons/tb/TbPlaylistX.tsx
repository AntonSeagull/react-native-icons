

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlaylistX = (props: IconProps) => {

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
          <Path  d="M19 8h-14" />
          <Path  d="M5 12h7" />
          <Path  d="M12 16h-7" />
          <Path  d="M16 14l4 4" />
          <Path  d="M20 14l-4 4" />
        </G>
      </Svg>
    );
  }

