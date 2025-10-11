

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGitPullRequestSharp = (props: IconProps) => {

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
          <Path d="M192,96a64,64,0,1,0-97,54.81v209.8a64,64,0,1,0,64,0V152A64.06,64.06,0,0,0,192,96ZM128,64A32,32,0,1,1,96,96,32,32,0,0,1,128,64Zm-1,384a32,32,0,1,1,32-32A32,32,0,0,1,127,448Z" />
          <Path d="M416,360.61V156a92.1,92.1,0,0,0-92-92H289V9.93L201.14,96,289,182.07V128h35a28,28,0,0,1,28,28V360.61a64,64,0,1,0,64,0ZM384,448a32,32,0,1,1,32-32A32,32,0,0,1,384,448Z" />
        </G>
      </Svg>
    );
  }

