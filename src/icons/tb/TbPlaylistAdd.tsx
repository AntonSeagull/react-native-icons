

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlaylistAdd = (props: IconProps) => {

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
          <Path  d="M5 12h9" />
          <Path  d="M11 16h-6" />
          <Path  d="M15 16h6" />
          <Path  d="M18 13v6" />
        </G>
      </Svg>
    );
  }

