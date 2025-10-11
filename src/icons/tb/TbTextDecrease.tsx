

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextDecrease = (props: IconProps) => {

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
          <Path d="M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5" />
          <Path d="M4 13h7" />
          <Path d="M21 12h-6" />
        </G>
      </Svg>
    );
  }

