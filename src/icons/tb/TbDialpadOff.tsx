

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDialpadOff = (props: IconProps) => {

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
          <Path  d="M7 7h-4v-4" />
          <Path  d="M17 3h4v4h-4z" />
          <Path  d="M10 6v-3h4v4h-3" />
          <Path  d="M3 10h4v4h-4z" />
          <Path  d="M17 13v-3h4v4h-3" />
          <Path  d="M14 14h-4v-4" />
          <Path  d="M10 17h4v4h-4z" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

