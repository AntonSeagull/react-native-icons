

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSignRight = (props: IconProps) => {

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
          <Path d="M8 21h4" />
          <Path d="M10 21v-10" />
          <Path d="M10 6v-3" />
          <Path d="M6 6h10l2 2.5l-2 2.5h-10z" />
        </G>
      </Svg>
    );
  }

