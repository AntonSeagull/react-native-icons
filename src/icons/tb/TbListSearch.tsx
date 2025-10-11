

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbListSearch = (props: IconProps) => {

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
          <Path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path d="M18.5 18.5l2.5 2.5" />
          <Path d="M4 6h16" />
          <Path d="M4 12h4" />
          <Path d="M4 18h4" />
        </G>
      </Svg>
    );
  }

