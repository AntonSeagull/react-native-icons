

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUsersGroup = (props: IconProps) => {

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
          <Path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
          <Path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M17 10h2a2 2 0 0 1 2 2v1" />
          <Path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
        </G>
      </Svg>
    );
  }

