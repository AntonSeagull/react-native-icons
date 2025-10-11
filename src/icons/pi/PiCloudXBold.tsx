

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCloudXBold = (props: IconProps) => {

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
          <Path d="M160,36A92.09,92.09,0,0,0,79,84.36,68,68,0,1,0,72,220h88a92,92,0,0,0,0-184Zm0,160H72a44,44,0,0,1-1.82-88A91.86,91.86,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,68,68Zm32.49-79.51L177,132l15.52,15.51a12,12,0,0,1-17,17L160,149l-15.51,15.52a12,12,0,1,1-17-17L143,132l-15.52-15.51a12,12,0,1,1,17-17L160,115l15.51-15.52a12,12,0,0,1,17,17Z" />
        </G>
      </Svg>
    );
  }

