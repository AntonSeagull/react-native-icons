

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLadderOff = (props: IconProps) => {

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
          <Path d="M8 3v1m0 4v13" />
          <Path d="M16 3v9m0 4v5" />
          <Path d="M8 14h6" />
          <Path d="M8 10h2m4 0h2" />
          <Path d="M10 6h6" />
          <Path d="M8 18h8" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

