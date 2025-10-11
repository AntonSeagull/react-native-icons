

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCursorText = (props: IconProps) => {

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
          <Path d="M10 12h4" />
          <Path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3" />
          <Path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3" />
        </G>
      </Svg>
    );
  }

