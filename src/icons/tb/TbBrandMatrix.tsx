

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandMatrix = (props: IconProps) => {

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
          <Path  d="M4 3h-1v18h1" />
          <Path  d="M20 21h1v-18h-1" />
          <Path  d="M7 9v6" />
          <Path  d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
          <Path  d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
        </G>
      </Svg>
    );
  }

