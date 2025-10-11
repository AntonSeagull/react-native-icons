

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAxis3d = (props: IconProps) => {

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
          <Path d="M13.5 10.5 15 9" />
          <Path d="M4 4v15a1 1 0 0 0 1 1h15" />
          <Path d="M4.293 19.707 6 18" />
          <Path d="m9 15 1.5-1.5" />
        </G>
      </Svg>
    );
  }

