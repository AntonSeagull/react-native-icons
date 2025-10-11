

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFileCode2 = (props: IconProps) => {

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
          <Path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
          <Path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <Path d="m5 12-3 3 3 3" />
          <Path d="m9 18 3-3-3-3" />
        </G>
      </Svg>
    );
  }

