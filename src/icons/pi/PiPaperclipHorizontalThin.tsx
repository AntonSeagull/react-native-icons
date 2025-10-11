

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPaperclipHorizontalThin = (props: IconProps) => {

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
          <Path  d="M244,128a52.06,52.06,0,0,1-52,52H48a36,36,0,0,1,0-72H192a20,20,0,0,1,0,40H80a4,4,0,0,1,0-8H192a12,12,0,0,0,0-24H48a28,28,0,0,0,0,56H192a44,44,0,0,0,0-88H80a4,4,0,0,1,0-8H192A52.06,52.06,0,0,1,244,128Z" />
        </G>
      </Svg>
    );
  }

