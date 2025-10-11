

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiEscalatorUpBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M224,36H168a12,12,0,0,0-8.82,3.86L66.75,140H32a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20H88a12,12,0,0,0,8.82-3.86L189.25,116H224a20,20,0,0,0,20-20V56A20,20,0,0,0,224,36Zm-4,56H184a12,12,0,0,0-8.82,3.86L82.75,196H36V164H72a12,12,0,0,0,8.82-3.86L173.25,60H220Zm12.49,75.51a12,12,0,0,1-17,17L212,181v27a12,12,0,0,1-24,0V181l-3.51,3.52a12,12,0,0,1-17-17l24-24a12,12,0,0,1,17,0Z" />
        </G>
      </Svg>
    );
  }

