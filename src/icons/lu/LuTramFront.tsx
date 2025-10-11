

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTramFront = (props: IconProps) => {

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
          <Path d="M4 11h16" />
          <Path d="M12 3v8" />
          <Path d="m8 19-2 3" />
          <Path d="m18 22-2-3" />
          <Path d="M8 15h.01" />
          <Path d="M16 15h.01" />
        </G>
      </Svg>
    );
  }

