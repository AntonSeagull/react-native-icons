

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMapLocation = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="none" d="M17.5,6.5 L23,9 L23,22 L16,19 L8,22 L1,19 L1,6 L6,8 M16,19 L16,12 M8,22 L8,12 M12,16.2727273 C12,16.2727273 6,11.5 6,7 C6,3.25 9,1 12,1 C15,1 18,3.25 18,7 C18,11.5 12,16.2727273 12,16.2727273 Z M13,7 C13,6.44766667 12.5523333,6 12,6 C11.4476667,6 11,6.44766667 11,7 C11,7.55233333 11.4476667,8 12,8 C12.5523333,8 13,7.55233333 13,7 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

