

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowLeftRight = (props: IconProps) => {

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
          <Path d="M8 3 4 7l4 4" />
          <Path d="M4 7h16" />
          <Path d="m16 21 4-4-4-4" />
          <Path d="M20 17H4" />
        </G>
      </Svg>
    );
  }

