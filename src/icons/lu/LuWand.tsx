

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWand = (props: IconProps) => {

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
          <Path  d="M15 4V2" />
          <Path  d="M15 16v-2" />
          <Path  d="M8 9h2" />
          <Path  d="M20 9h2" />
          <Path  d="M17.8 11.8 19 13" />
          <Path  d="M15 9h.01" />
          <Path  d="M17.8 6.2 19 5" />
          <Path  d="m3 21 9-9" />
          <Path  d="M12.2 6.2 11 5" />
        </G>
      </Svg>
    );
  }

