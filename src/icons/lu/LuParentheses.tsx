

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuParentheses = (props: IconProps) => {

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
          <Path d="M8 21s-4-3-4-9 4-9 4-9" />
          <Path d="M16 3s4 3 4 9-4 9-4 9" />
        </G>
      </Svg>
    );
  }

