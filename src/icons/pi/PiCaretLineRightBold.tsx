

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretLineRightBold = (props: IconProps) => {

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
          <Path d="M152.49,119.51a12,12,0,0,1,0,17l-80,80a12,12,0,0,1-17-17L127,128,55.51,56.49a12,12,0,0,1,17-17ZM184,36a12,12,0,0,0-12,12V208a12,12,0,0,0,24,0V48A12,12,0,0,0,184,36Z" />
        </G>
      </Svg>
    );
  }

