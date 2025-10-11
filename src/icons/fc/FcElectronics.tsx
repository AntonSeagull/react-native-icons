

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcElectronics = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M44,18v-4H34V4h-4v10h-4V4h-4v10h-4V4h-4v10H4v4h10v4H4v4h10v4H4v4h10v10h4V34h4v10h4V34h4v10h4V34h10v-4H34 v-4h10v-4H34v-4H44z" fill="#FF9800" />
          <Path d="M8,12v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V12c0-2.2-1.8-4-4-4H12C9.8,8,8,9.8,8,12z" fill="#4CAF50" />
          <Path d="M31,31H17c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C33,30.1,32.1,31,31,31z" fill="#37474F" />
        </G>
      </Svg>
    );
  }

