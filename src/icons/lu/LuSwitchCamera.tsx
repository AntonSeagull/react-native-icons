

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSwitchCamera = (props: IconProps) => {

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
          <Path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
          <Path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
          <Path d="m18 22-3-3 3-3" />
          <Path d="m6 2 3 3-3 3" />
        </G>
      </Svg>
    );
  }

