

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDatabaseShare = (props: IconProps) => {

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
          <Path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
          <Path d="M4 6v6c0 1.657 3.582 3 8 3c.361 0 .716 -.009 1.065 -.026" />
          <Path d="M20 13v-7" />
          <Path d="M4 12v6c0 1.657 3.582 3 8 3" />
          <Path d="M16 22l5 -5" />
          <Path d="M21 21.5v-4.5h-4.5" />
        </G>
      </Svg>
    );
  }

