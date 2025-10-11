

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiEscalatorDownBold = (props: IconProps) => {

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
          <Path  d="M167.51,88.49a12,12,0,0,1,17-17L188,75V48a12,12,0,0,1,24,0V75l3.51-3.52a12,12,0,0,1,17,17l-24,24a12,12,0,0,1-17,0ZM244,160v40a20,20,0,0,1-20,20H168a12,12,0,0,1-8.82-3.86L66.75,116H32A20,20,0,0,1,12,96V56A20,20,0,0,1,32,36H88a12,12,0,0,1,8.82,3.86L189.25,140H224A20,20,0,0,1,244,160Zm-24,4H184a12,12,0,0,1-8.82-3.86L82.75,60H36V92H72a12,12,0,0,1,8.82,3.86L173.25,196H220Z" />
        </G>
      </Svg>
    );
  }

