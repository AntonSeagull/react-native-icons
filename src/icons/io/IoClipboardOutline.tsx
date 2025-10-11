

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoClipboardOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M336,64h32a48,48,0,0,1,48,48V432a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V112a48,48,0,0,1,48-48h32" />
        </G>
      </Svg>
    );
  }

