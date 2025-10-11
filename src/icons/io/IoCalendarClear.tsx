

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCalendarClear = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M480,128a64,64,0,0,0-64-64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64v12a4,4,0,0,0,4,4H476a4,4,0,0,0,4-4Z" />
          <Path  d="M32,416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V180a4,4,0,0,0-4-4H36a4,4,0,0,0-4,4Z" />
        </G>
      </Svg>
    );
  }

