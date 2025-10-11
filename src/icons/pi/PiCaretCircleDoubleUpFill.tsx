

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretCircleDoubleUpFill = (props: IconProps) => {

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
          <Path d="M201.58,54.43a104,104,0,1,0,0,147.14A104.17,104.17,0,0,0,201.58,54.43Zm-35.9,119.25a8,8,0,0,1-11.32,0L128,147.32l-26.35,26.36a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.68,173.68Zm0-56a8,8,0,0,1-11.32,0L128,91.29l-26.35,26.36a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.68,117.65Z" />
        </G>
      </Svg>
    );
  }

