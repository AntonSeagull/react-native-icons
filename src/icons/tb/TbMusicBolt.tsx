

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMusicBolt = (props: IconProps) => {

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
          <Path  d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path  d="M9 17v-13h10v8" />
          <Path  d="M9 8h10" />
          <Path  d="M19 16l-2 3h4l-2 3" />
        </G>
      </Svg>
    );
  }

