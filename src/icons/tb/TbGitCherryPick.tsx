

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGitCherryPick = (props: IconProps) => {

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
          <Path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M7 3v6" />
          <Path d="M7 15v6" />
          <Path d="M13 7h2.5l1.5 5l-1.5 5h-2.5" />
          <Path d="M17 12h3" />
        </G>
      </Svg>
    );
  }

