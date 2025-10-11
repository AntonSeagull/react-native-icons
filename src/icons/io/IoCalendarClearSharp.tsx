

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCalendarClearSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V192H32Z" />
          <Path d="M480,87.77A23.8,23.8,0,0,0,456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480Z" />
        </G>
      </Svg>
    );
  }

