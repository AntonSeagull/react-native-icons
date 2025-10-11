

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFileTrayFullOutline = (props: IconProps) => {

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
          <Path d="M384,80H128c-26,0-43,14-48,40L48,272V384a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V272L432,120C427,93,409,80,384,80Z" />
          <Path d="M192,272a64,64,0,0,0,128,0" />
        </G>
      </Svg>
    );
  }

