

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCalendarDotsThin = (props: IconProps) => {

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
          <Path  d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Zm-72-80a8,8,0,1,1-8-8A8,8,0,0,1,136,132Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,180,132ZM92,172a8,8,0,1,1-8-8A8,8,0,0,1,92,172Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,136,172Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,180,172Z" />
        </G>
      </Svg>
    );
  }

