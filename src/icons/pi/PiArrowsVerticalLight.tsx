

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowsVerticalLight = (props: IconProps) => {

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
          <Path  d="M164.24,195.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,217.51v-179L100.24,60.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L134,38.49v179l21.76-21.75A6,6,0,0,1,164.24,195.76Z" />
        </G>
      </Svg>
    );
  }

