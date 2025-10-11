

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSpellCheck = (props: IconProps) => {

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
          <Path d="m6 16 6-12 6 12" />
          <Path d="M8 12h8" />
          <Path d="m16 20 2 2 4-4" />
        </G>
      </Svg>
    );
  }

