

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowRightUpLight = (props: IconProps) => {

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
          <Path  d="M220.24,100.24a6,6,0,0,1-8.48,0L174,62.49V192a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H162V62.49l-37.76,37.75a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48A6,6,0,0,1,220.24,100.24Z" />
        </G>
      </Svg>
    );
  }

