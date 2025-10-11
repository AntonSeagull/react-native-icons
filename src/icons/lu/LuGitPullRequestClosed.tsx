

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitPullRequestClosed = (props: IconProps) => {

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
          <Path d="m21 3-6 6" />
          <Path d="m21 9-6-6" />
          <Path d="M18 11.5V15" />
        </G>
      </Svg>
    );
  }

