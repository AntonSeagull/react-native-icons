

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHospitalThin = (props: IconProps) => {

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
          <Path  d="M248,212H236V128a12,12,0,0,0-12-12H164V48a12,12,0,0,0-12-12H56A12,12,0,0,0,44,48V212H32a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8Zm-24-88a4,4,0,0,1,4,4v84H164V124ZM52,48a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4V212H132V160a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v52H52Zm72,164H84V164h40ZM76,96a4,4,0,0,1,4-4h20V72a4,4,0,0,1,8,0V92h20a4,4,0,0,1,0,8H108v20a4,4,0,0,1-8,0V100H80A4,4,0,0,1,76,96Z" />
        </G>
      </Svg>
    );
  }

