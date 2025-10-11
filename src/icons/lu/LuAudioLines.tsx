

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAudioLines = (props: IconProps) => {

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
          <Path d="M2 10v3" />
          <Path d="M6 6v11" />
          <Path d="M10 3v18" />
          <Path d="M14 8v7" />
          <Path d="M18 5v13" />
          <Path d="M22 10v3" />
        </G>
      </Svg>
    );
  }

