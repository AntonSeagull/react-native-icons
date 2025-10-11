

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdQueueMusic = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M15,6H3v2h12V6z M15,10H3v2h12V10z M3,16h8v-2H3V16z M17,6v8.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 s3-1.34,3-3V8h3V6H17z" />
        </G>
      </Svg>
    );
  }

