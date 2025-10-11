

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowSquareUpLeftFill = (props: IconProps) => {

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
          <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM165.66,165.66a8,8,0,0,1-11.32,0L104,115.31V144a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31l50.35,50.34A8,8,0,0,1,165.66,165.66Z" />
        </G>
      </Svg>
    );
  }

