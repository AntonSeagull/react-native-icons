

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHomeBolt = (props: IconProps) => {

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
          <Path  d="M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5" />
          <Path  d="M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815" />
          <Path  d="M19 14l-2 4h4l-2 4" />
        </G>
      </Svg>
    );
  }

