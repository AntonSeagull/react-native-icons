

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFileTypePpt = (props: IconProps) => {

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
          <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
          <Path d="M11 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
          <Path d="M16.5 15h3" />
          <Path d="M18 15v6" />
          <Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
        </G>
      </Svg>
    );
  }

