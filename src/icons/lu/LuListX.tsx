

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListX = (props: IconProps) => {

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
          <Path d="M16 5H3" />
          <Path d="M11 12H3" />
          <Path d="M16 19H3" />
          <Path d="m15.5 9.5 5 5" />
          <Path d="m20.5 9.5-5 5" />
        </G>
      </Svg>
    );
  }

