

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDatabaseSearch = (props: IconProps) => {

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
          <Path d="M4 6v6c0 1.657 3.582 3 8 3m8 -3.5v-5.5" />
          <Path d="M4 12v6c0 1.657 3.582 3 8 3" />
          <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M20.2 20.2l1.8 1.8" />
        </G>
      </Svg>
    );
  }

