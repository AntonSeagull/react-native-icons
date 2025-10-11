

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGitMerge = (props: IconProps) => {

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
          <Path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M7 8l0 8" />
          <Path d="M7 8a4 4 0 0 0 4 4h4" />
        </G>
      </Svg>
    );
  }

