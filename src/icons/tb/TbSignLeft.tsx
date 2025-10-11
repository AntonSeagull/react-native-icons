

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSignLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 21h-4" />
          <Path d="M14 21v-10" />
          <Path d="M14 6v-3" />
          <Path d="M18 6h-10l-2 2.5l2 2.5h10z" />
        </G>
      </Svg>
    );
  }

