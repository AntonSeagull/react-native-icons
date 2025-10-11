

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodTongueWink = (props: IconProps) => {

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
          <Path  d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path  d="M9 10h.01" />
          <Path  d="M10 14v2a2 2 0 0 0 4 0v-2" />
          <Path  d="M15.5 14h-7" />
          <Path  d="M17 10c-.5 -1 -2.5 -1 -3 0" />
        </G>
      </Svg>
    );
  }

