

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMusicNotesMinusLight = (props: IconProps) => {

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
          <Path d="M230,48a6,6,0,0,1-6,6H176a6,6,0,0,1,0-12h48A6,6,0,0,1,230,48ZM214,88v76a34.06,34.06,0,1,1-12-25.89V88a6,6,0,0,1,12,0Zm-12,76a22,22,0,1,0-22,22A22,22,0,0,0,202,164ZM86,108.69V196a34.06,34.06,0,1,1-12-25.89V56a6,6,0,0,1,4.54-5.82l56-14a6,6,0,1,1,2.92,11.64L86,60.68V96.31l72.54-18.13a6,6,0,1,1,2.92,11.64ZM74,196a22,22,0,1,0-22,22A22,22,0,0,0,74,196Z" />
        </G>
      </Svg>
    );
  }

