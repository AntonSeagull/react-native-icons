

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCrosshairSimpleThin = (props: IconProps) => {

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
          <Path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V184a4,4,0,0,0-8,0v35.91A92.13,92.13,0,0,1,36.09,132H72a4,4,0,0,0,0-8H36.09A92.13,92.13,0,0,1,124,36.09V72a4,4,0,0,0,8,0V36.09A92.13,92.13,0,0,1,219.91,124H184a4,4,0,0,0,0,8h35.91A92.13,92.13,0,0,1,132,219.91Z" />
        </G>
      </Svg>
    );
  }

