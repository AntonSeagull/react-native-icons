

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitPullRequestCreate = (props: IconProps) => {

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
          <Path d="M6 9v12" />
          <Path d="M13 6h3a2 2 0 0 1 2 2v3" />
          <Path d="M18 15v6" />
          <Path d="M21 18h-6" />
        </G>
      </Svg>
    );
  }

