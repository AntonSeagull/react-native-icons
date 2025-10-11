

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNotepadText = (props: IconProps) => {

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
          <Path d="M8 10h6" />
          <Path d="M8 14h8" />
          <Path d="M8 18h5" />
        </G>
      </Svg>
    );
  }

