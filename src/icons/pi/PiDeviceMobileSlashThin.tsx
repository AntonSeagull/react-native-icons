

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDeviceMobileSlashThin = (props: IconProps) => {

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
          <Path  d="M211,213.31,51,37.31A4,4,0,0,0,45,42.69L60,59.15V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20v-7.25l9,9.94a4,4,0,1,0,5.92-5.38ZM188,216a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V68L188,200ZM72.7,24a4,4,0,0,1,4-4H176a20,20,0,0,1,20,20V150.83a4,4,0,1,1-8,0V40a12,12,0,0,0-12-12H76.7A4,4,0,0,1,72.7,24Z" />
        </G>
      </Svg>
    );
  }

