

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLecternThin = (props: IconProps) => {

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
          <Path  d="M242.72,122.63l-40-80A11.93,11.93,0,0,0,192,36H64a11.93,11.93,0,0,0-10.73,6.63l-40,80A12,12,0,0,0,24,140H124v72H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V140H232a12,12,0,0,0,10.73-17.37Zm-7.33,7.47A3.94,3.94,0,0,1,232,132H24a4,4,0,0,1-3.58-5.79l40-80A4,4,0,0,1,64,44H192a4,4,0,0,1,3.58,2.21l40,80A3.94,3.94,0,0,1,235.39,130.1ZM188,104a4,4,0,0,1-4,4H72a4,4,0,0,1,0-8H184A4,4,0,0,1,188,104Z" />
        </G>
      </Svg>
    );
  }

