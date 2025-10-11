

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGitGraph = (props: IconProps) => {

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
          <Path d="M5 9v6" />
          <Path d="M12 3v18" />
          <Path d="M16 15.7A9 9 0 0 0 19 9" />
        </G>
      </Svg>
    );
  }

