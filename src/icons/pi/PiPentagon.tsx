

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPentagon = (props: IconProps) => {

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
          <Path  d="M225.56,87.56,137.64,19.25l-.18-.14a15.93,15.93,0,0,0-18.92,0l-.18.14L30.44,87.56a16,16,0,0,0-5.7,17.63l32,107.54.06.17A15.94,15.94,0,0,0,72,224H184a15.94,15.94,0,0,0,15.23-11.1l.06-.17,32-107.54A16,16,0,0,0,225.56,87.56Zm-9.62,13L184,208H72l-32-107.44-.06-.17h0l.18-.14L128,32l87.82,68.23.18.14Z" />
        </G>
      </Svg>
    );
  }

