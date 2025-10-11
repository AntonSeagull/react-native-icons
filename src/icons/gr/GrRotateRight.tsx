

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrRotateRight = (props: IconProps) => {

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
          <Path d="M12.48,3.43A9.09,9.09,0,0,1,18.3,5.55V2.35h1.64v6.5h-6.5V7.21H17.7a7.46,7.46,0,1,0,1.47,8.65l1.46.73A9.11,9.11,0,1,1,12.48,3.43Z" />
        </G>
      </Svg>
    );
  }

