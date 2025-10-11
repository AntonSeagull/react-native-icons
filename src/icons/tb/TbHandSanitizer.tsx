

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHandSanitizer = (props: IconProps) => {

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
          <Path d="M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10z" />
          <Path d="M15 3h-6a2 2 0 0 0 -2 2" />
          <Path d="M12 3v5" />
          <Path d="M12 11v4" />
          <Path d="M10 13h4" />
        </G>
      </Svg>
    );
  }

