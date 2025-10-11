

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGitCompare = (props: IconProps) => {

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
          <Path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M11 6h5a2 2 0 0 1 2 2v8" />
          <Path d="M14 9l-3 -3l3 -3" />
          <Path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />
          <Path d="M10 15l3 3l-3 3" />
        </G>
      </Svg>
    );
  }

