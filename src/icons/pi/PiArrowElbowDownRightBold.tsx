

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowDownRightBold = (props: IconProps) => {

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
          <Path  d="M224.49,184.49l-48,48a12,12,0,0,1-17-17L187,188H72a12,12,0,0,1-12-12V32a12,12,0,0,1,24,0V164H187l-27.52-27.51a12,12,0,1,1,17-17l48,48A12,12,0,0,1,224.49,184.49Z" />
        </G>
      </Svg>
    );
  }

