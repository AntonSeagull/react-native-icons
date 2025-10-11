

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbVipOff = (props: IconProps) => {

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
          <Path  d="M3 5h2m4 0h12" />
          <Path  d="M3 19h16" />
          <Path  d="M4 9l2 6h1l2 -6" />
          <Path  d="M12 12v3" />
          <Path  d="M16 12v-3h2a2 2 0 1 1 0 4h-1" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

