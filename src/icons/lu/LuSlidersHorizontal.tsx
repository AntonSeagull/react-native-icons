

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSlidersHorizontal = (props: IconProps) => {

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
          <Path d="M10 5H3" />
          <Path d="M12 19H3" />
          <Path d="M14 3v4" />
          <Path d="M16 17v4" />
          <Path d="M21 12h-9" />
          <Path d="M21 19h-5" />
          <Path d="M21 5h-7" />
          <Path d="M8 10v4" />
          <Path d="M8 12H3" />
        </G>
      </Svg>
    );
  }

