

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbProgressX = (props: IconProps) => {

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
          <Path  d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
          <Path  d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
          <Path  d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
          <Path  d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
          <Path  d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
          <Path  d="M14 14l-4 -4" />
          <Path  d="M10 14l4 -4" />
        </G>
      </Svg>
    );
  }

