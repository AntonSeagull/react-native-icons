

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imarge = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 0h-6.5l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5z" fill="#000000" />
          <Path d="M16 16v-6.5l-2.5 2.5-3-3-1.5 1.5 3 3-2.5 2.5z" fill="#000000" />
          <Path d="M0 16h6.5l-2.5-2.5 3-3-1.5-1.5-3 3-2.5-2.5z" fill="#000000" />
          <Path d="M0 0v6.5l2.5-2.5 3 3 1.5-1.5-3-3 2.5-2.5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

