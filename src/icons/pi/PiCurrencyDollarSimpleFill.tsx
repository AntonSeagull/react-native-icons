

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyDollarSimpleFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm16,160h-8v8a8,8,0,0,1-16,0v-8h-8a32,32,0,0,1-32-32,8,8,0,0,1,16,0,16,16,0,0,0,16,16h32a16,16,0,0,0,0-32H116a32,32,0,0,1,0-64h4V64a8,8,0,0,1,16,0v8h4a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H116a16,16,0,0,0,0,32h28a32,32,0,0,1,0,64Z" />
        </G>
      </Svg>
    );
  }

