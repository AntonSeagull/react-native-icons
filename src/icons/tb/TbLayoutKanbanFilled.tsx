

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLayoutKanbanFilled = (props: IconProps) => {

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
          <Path  d="M10 3a1 1 0 0 1 0 2h-6a1 1 0 1 1 0 -2z" />
          <Path  d="M20 3a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z" />
          <Path  d="M8 7a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" />
          <Path  d="M18 7a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
        </G>
      </Svg>
    );
  }

