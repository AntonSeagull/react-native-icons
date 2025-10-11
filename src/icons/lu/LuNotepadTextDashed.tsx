

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNotepadTextDashed = (props: IconProps) => {

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
          <Path d="M8 2v4" />
          <Path d="M12 2v4" />
          <Path d="M16 2v4" />
          <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path d="M20 12v2" />
          <Path d="M20 18v2a2 2 0 0 1-2 2h-1" />
          <Path d="M13 22h-2" />
          <Path d="M7 22H6a2 2 0 0 1-2-2v-2" />
          <Path d="M4 14v-2" />
          <Path d="M4 8V6a2 2 0 0 1 2-2h2" />
          <Path d="M8 10h6" />
          <Path d="M8 14h8" />
          <Path d="M8 18h5" />
        </G>
      </Svg>
    );
  }

