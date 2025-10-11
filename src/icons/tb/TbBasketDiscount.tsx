

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBasketDiscount = (props: IconProps) => {

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
          <Path  d="M17 10l-2 -6" />
          <Path  d="M7 10l2 -6" />
          <Path  d="M12.5 20h-5.256a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.394 2.248" />
          <Path  d="M13.856 13.254a2 2 0 1 0 -1.856 2.746" />
          <Path  d="M16 21l5 -5" />
          <Path  d="M21 21v.01" />
          <Path  d="M16 16v.01" />
        </G>
      </Svg>
    );
  }

