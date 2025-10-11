

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCalendarRepeat = (props: IconProps) => {

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
          <Path  d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
          <Path  d="M16 3v4" />
          <Path  d="M8 3v4" />
          <Path  d="M4 11h12" />
          <Path  d="M20 14l2 2h-3" />
          <Path  d="M20 18l2 -2" />
          <Path  d="M19 16a3 3 0 1 0 2 5.236" />
        </G>
      </Svg>
    );
  }

