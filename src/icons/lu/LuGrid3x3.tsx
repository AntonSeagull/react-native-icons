

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGrid3x3 = (props: IconProps) => {

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
          <Path d="M3 9h18" />
          <Path d="M3 15h18" />
          <Path d="M9 3v18" />
          <Path d="M15 3v18" />
        </G>
      </Svg>
    );
  }

