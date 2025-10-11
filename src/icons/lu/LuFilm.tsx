

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFilm = (props: IconProps) => {

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
          <Path d="M7 3v18" />
          <Path d="M3 7.5h4" />
          <Path d="M3 12h18" />
          <Path d="M3 16.5h4" />
          <Path d="M17 3v18" />
          <Path d="M17 7.5h4" />
          <Path d="M17 16.5h4" />
        </G>
      </Svg>
    );
  }

