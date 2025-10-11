

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPlaySkipForward = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M400,64a16,16,0,0,0-16,16V216.43L151.23,77.11a35.13,35.13,0,0,0-35.77-.44C103.46,83.47,96,96.63,96,111V401c0,14.37,7.46,27.53,19.46,34.33a35.14,35.14,0,0,0,35.77-.45L384,295.57V432a16,16,0,0,0,32,0V80A16,16,0,0,0,400,64Z" />
        </G>
      </Svg>
    );
  }

