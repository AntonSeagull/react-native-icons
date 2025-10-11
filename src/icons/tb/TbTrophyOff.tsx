

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTrophyOff = (props: IconProps) => {

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
          <Path  d="M8 21h8" />
          <Path  d="M12 17v4" />
          <Path  d="M8 4h9" />
          <Path  d="M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5" />
          <Path  d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

