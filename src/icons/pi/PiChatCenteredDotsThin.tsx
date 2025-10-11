

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChatCenteredDotsThin = (props: IconProps) => {

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
          <Path  d="M136,120a8,8,0,1,1-8-8A8,8,0,0,1,136,120Zm-52-8a8,8,0,1,0,8,8A8,8,0,0,0,84,112Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,172,112Zm56-56V184a12,12,0,0,1-12,12H153.25L138.42,222a12,12,0,0,1-20.84,0L102.75,196H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V184a4,4,0,0,0,4,4h65.07a4,4,0,0,1,3.47,2l16,28a4,4,0,0,0,6.94,0l16-28a4,4,0,0,1,3.47-2H216a4,4,0,0,0,4-4Z" />
        </G>
      </Svg>
    );
  }

