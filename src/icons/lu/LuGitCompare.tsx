

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitCompare = (props: IconProps) => {

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
          <Path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <Path d="M11 18H8a2 2 0 0 1-2-2V9" />
        </G>
      </Svg>
    );
  }

