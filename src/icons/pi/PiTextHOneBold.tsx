

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextHOneBold = (props: IconProps) => {

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
          <Path  d="M236,112v96a12,12,0,0,1-24,0V134.42L206.66,138a12,12,0,0,1-13.32-20l24-16A12,12,0,0,1,236,112ZM144,44a12,12,0,0,0-12,12v48H52V56a12,12,0,0,0-24,0V176a12,12,0,0,0,24,0V128h80v48a12,12,0,0,0,24,0V56A12,12,0,0,0,144,44Z" />
        </G>
      </Svg>
    );
  }

