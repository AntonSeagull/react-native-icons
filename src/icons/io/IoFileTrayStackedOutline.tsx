

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFileTrayStackedOutline = (props: IconProps) => {

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
          <Path d="M48,336v96a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V336" />
          <Path d="M192,336a64,64,0,0,0,128,0" />
          <Path d="M384,32H128c-26,0-43,14-48,40L48,192v96a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V192L432,72C427,45,409,32,384,32Z" />
          <Path d="M192,192a64,64,0,0,0,128,0" />
        </G>
      </Svg>
    );
  }

