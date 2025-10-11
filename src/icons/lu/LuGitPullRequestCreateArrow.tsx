

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitPullRequestCreateArrow = (props: IconProps) => {

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
          <Path d="M5 9v12" />
          <Path d="m15 9-3-3 3-3" />
          <Path d="M12 6h5a2 2 0 0 1 2 2v3" />
          <Path d="M19 15v6" />
          <Path d="M22 18h-6" />
        </G>
      </Svg>
    );
  }

