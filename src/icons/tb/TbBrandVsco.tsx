

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandVsco = (props: IconProps) => {

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
          <Path  d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
          <Path  d="M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0z" />
          <Path  d="M12 3v4" />
          <Path  d="M21 12h-4" />
          <Path  d="M12 21v-4" />
          <Path  d="M3 12h4" />
          <Path  d="M18.364 5.636l-2.828 2.828" />
          <Path  d="M18.364 18.364l-2.828 -2.828" />
          <Path  d="M5.636 18.364l2.828 -2.828" />
          <Path  d="M5.636 5.636l2.828 2.828" />
        </G>
      </Svg>
    );
  }

