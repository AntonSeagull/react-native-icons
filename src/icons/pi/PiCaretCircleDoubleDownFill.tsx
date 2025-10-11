

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretCircleDoubleDownFill = (props: IconProps) => {

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
          <Path d="M201.57,54.43A104.15,104.15,0,1,0,232,128,104.17,104.17,0,0,0,201.57,54.43Zm-35.9,95.24-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,164.71l26.35-26.36a8,8,0,1,1,11.32,11.32Zm0-56-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,108.68l26.35-26.36a8,8,0,1,1,11.32,11.32Z" />
        </G>
      </Svg>
    );
  }

