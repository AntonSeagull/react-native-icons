

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNotepadLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M166,128a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,128Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12ZM214,40V200a30,30,0,0,1-30,30H72a30,30,0,0,1-30-30V40a6,6,0,0,1,6-6H74V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h26A6,6,0,0,1,214,40Zm-12,6H182V56a6,6,0,0,1-12,0V46H134V56a6,6,0,0,1-12,0V46H86V56a6,6,0,0,1-12,0V46H54V200a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z" />
        </G>
      </Svg>
    );
  }

