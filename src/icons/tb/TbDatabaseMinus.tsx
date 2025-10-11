

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDatabaseMinus = (props: IconProps) => {

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
          <Path d="M4 6v6c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-6" />
          <Path d="M4 12v6c0 1.657 3.582 3 8 3c.164 0 .328 -.002 .49 -.006" />
          <Path d="M20 15v-3" />
          <Path d="M16 19h6" />
        </G>
      </Svg>
    );
  }

