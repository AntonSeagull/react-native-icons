

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFacebookLogoLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z" />
        </G>
      </Svg>
    );
  }

