

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuStrikethrough = (props: IconProps) => {

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
          <Path d="M16 4H9a3 3 0 0 0-2.83 4" />
          <Path d="M14 12a4 4 0 0 1 0 8H6" />
        </G>
      </Svg>
    );
  }

