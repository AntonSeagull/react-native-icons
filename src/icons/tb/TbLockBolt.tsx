

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLockBolt = (props: IconProps) => {

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
          <Path  d="M13.5 21h-6.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.74 1.012" />
          <Path  d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M8 11v-4a4 4 0 1 1 8 0v4" />
          <Path  d="M19 16l-2 3h4l-2 3" />
        </G>
      </Svg>
    );
  }

