

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendDoubleUpLeftLight = (props: IconProps) => {

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
          <Path  d="M84.24,147.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L40.49,104ZM128,98H94.49l37.75-37.76a6,6,0,0,0-8.48-8.48l-48,48a6,6,0,0,0,0,8.48l48,48a6,6,0,0,0,8.48-8.48L94.49,110H128a90.1,90.1,0,0,1,90,90,6,6,0,0,0,12,0A102.12,102.12,0,0,0,128,98Z" />
        </G>
      </Svg>
    );
  }

