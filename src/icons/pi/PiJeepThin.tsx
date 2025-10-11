

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiJeepThin = (props: IconProps) => {

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
          <Path  d="M240,92H227.23l-10-46.51A12.07,12.07,0,0,0,205.53,36H50.47a12.07,12.07,0,0,0-11.74,9.49L28.77,92H16a4,4,0,0,0,0,8H28V200a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V172H180v28a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V100h12a4,4,0,0,0,0-8ZM46.56,47.16A4,4,0,0,1,50.47,44H205.53a4,4,0,0,1,3.91,3.16L219.05,92H37ZM68,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V172H68Zm148,4H192a4,4,0,0,1-4-4V172h32v28A4,4,0,0,1,216,204Zm4-40H148V128a4,4,0,0,0-8,0v36H116V128a4,4,0,0,0-8,0v36H36V100H220ZM60,132a8,8,0,1,1,8,8A8,8,0,0,1,60,132Zm120,0a8,8,0,1,1,8,8A8,8,0,0,1,180,132Z" />
        </G>
      </Svg>
    );
  }

