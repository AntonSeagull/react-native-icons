

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChevronsLeftRightEllipsis = (props: IconProps) => {

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
          <Path d="M12 12h.01" />
          <Path d="M16 12h.01" />
          <Path d="m17 7 5 5-5 5" />
          <Path d="m7 7-5 5 5 5" />
          <Path d="M8 12h.01" />
        </G>
      </Svg>
    );
  }

