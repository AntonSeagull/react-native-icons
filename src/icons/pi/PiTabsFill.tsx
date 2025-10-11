

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTabsFill = (props: IconProps) => {

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
          <Path d="M256,168a8,8,0,0,1-8,8H8A8,8,0,0,1,.37,165.6L22.63,91.4A15.89,15.89,0,0,1,38,80h84.1a15.89,15.89,0,0,1,15.32,11.4L158,160h15.3L150.79,85.15A4,4,0,0,1,154.62,80h15.43a16,16,0,0,1,15.32,11.4L206,160h15.3L198.79,85.15A4,4,0,0,1,202.62,80h15.43a16,16,0,0,1,15.32,11.4l22.26,74.18A8.11,8.11,0,0,1,256,168Z" />
        </G>
      </Svg>
    );
  }

