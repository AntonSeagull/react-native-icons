

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPopsicleBold = (props: IconProps) => {

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
          <Path  d="M128,4A76.08,76.08,0,0,0,52,80v96a20,20,0,0,0,20,20H96v28a32,32,0,0,0,64,0V196h24a20,20,0,0,0,20-20V80A76.08,76.08,0,0,0,128,4Zm8,220a8,8,0,0,1-16,0V196h16Zm44-52H76V80a52,52,0,0,1,104,0ZM120,76v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm40,0v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Z" />
        </G>
      </Svg>
    );
  }

