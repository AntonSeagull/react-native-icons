

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShoppingCartDown = (props: IconProps) => {

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
          <Path  d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M12.5 17h-6.5v-14h-2" />
          <Path  d="M6 5l14 1l-.859 6.011m-2.641 .989h-10.5" />
          <Path  d="M19 16v6" />
          <Path  d="M22 19l-3 3l-3 -3" />
        </G>
      </Svg>
    );
  }

