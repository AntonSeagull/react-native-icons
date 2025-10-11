

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGitBranchSharp = (props: IconProps) => {

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
          <Path d="M352,96a64,64,0,0,0-58.86,89.11L192,273.11V151.39a64,64,0,1,0-64,0V360.61a64,64,0,1,0,64,0V358L346.25,223.73c1.9.17,3.81.27,5.75.27a64,64,0,0,0,0-128ZM160,64a32,32,0,1,1-32,32A32,32,0,0,1,160,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,160,448ZM352,192a32,32,0,1,1,32-32A32,32,0,0,1,352,192Z" />
        </G>
      </Svg>
    );
  }

