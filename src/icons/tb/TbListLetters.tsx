

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbListLetters = (props: IconProps) => {

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
          <Path d="M11 6h9" />
          <Path d="M11 12h9" />
          <Path d="M11 18h9" />
          <Path d="M4 10v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
          <Path d="M4 8h3" />
          <Path d="M4 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6z" />
        </G>
      </Svg>
    );
  }

