

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWarehouseThin = (props: IconProps) => {

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
          <Path  d="M240,188H228V54.66l12.84-2.75a4,4,0,1,0-1.68-7.82l-224,48A4,4,0,0,0,16,100a4.07,4.07,0,0,0,.84-.09L28,97.52V188H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,95.81,220,56.38V188H188V128a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v60H36ZM180,156H76V132H180ZM76,164H180v24H76Z" />
        </G>
      </Svg>
    );
  }

