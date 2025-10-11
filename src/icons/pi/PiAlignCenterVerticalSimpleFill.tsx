

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignCenterVerticalSimpleFill = (props: IconProps) => {

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
          <Path  d="M216,128a8,8,0,0,1-8,8H176v72a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V136H48a8,8,0,0,1,0-16H80V48A16,16,0,0,1,96,32h64a16,16,0,0,1,16,16v72h32A8,8,0,0,1,216,128Z" />
        </G>
      </Svg>
    );
  }

