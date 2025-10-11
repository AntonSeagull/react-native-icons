

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imcrow = (props: IconProps) => {

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
          <Path d="M6 0h8v2h-2v14h-2v-14h-2v14h-2v-8c-2.209 0-4-1.791-4-4s1.791-4 4-4z" fill="#000000" />
        </G>
      </Svg>
    );
  }

