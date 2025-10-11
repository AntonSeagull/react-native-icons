

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAirTrafficControlBold = (props: IconProps) => {

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
          <Path  d="M232.38,68.52A20,20,0,0,0,216,60H140V36h12a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24h12V60H40A20,20,0,0,0,21.2,86.83l26.19,72A20.06,20.06,0,0,0,66.18,172H92v60a12,12,0,0,0,24,0V172h24v60a12,12,0,0,0,24,0V172h25.82a20.06,20.06,0,0,0,18.79-13.17l26.19-72A20,20,0,0,0,232.38,68.52ZM114,148,102.38,84h51.24L142,148ZM45.71,84H78l11.64,64H69ZM187,148H166.38L178,84h32.27Z" />
        </G>
      </Svg>
    );
  }

