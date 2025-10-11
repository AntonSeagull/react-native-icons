

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCherry = (props: IconProps) => {

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
          <Path  d="M7.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
          <Path  d="M17 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path  d="M9 13c.366 -2 1.866 -3.873 4.5 -5.6" />
          <Path  d="M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9" />
          <Path  d="M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0" />
        </G>
      </Svg>
    );
  }

