

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyBtcLight = (props: IconProps) => {

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
          <Path  d="M174.69,116.41A42,42,0,0,0,150,42.05V24a6,6,0,0,0-12,0V42H118V24a6,6,0,0,0-12,0V42H72a6,6,0,0,0,0,12H82V194H72a6,6,0,0,0,0,12h34v18a6,6,0,0,0,12,0V206h20v18a6,6,0,0,0,12,0V206h10a46,46,0,0,0,14.69-89.59ZM178,84a30,30,0,0,1-30,30H94V54h54A30,30,0,0,1,178,84ZM160,194H94V126h66a34,34,0,0,1,0,68Z" />
        </G>
      </Svg>
    );
  }

