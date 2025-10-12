

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGarageThin = (props: IconProps) => {

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
          <Path  d="M240,196H228V98.67a12,12,0,0,0-5.34-10L134.66,30a12,12,0,0,0-13.32,0l-88,58.67a12,12,0,0,0-5.34,10V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,98.67a4,4,0,0,1,1.78-3.33l88-58.66a4,4,0,0,1,4.44,0l88,58.66A4,4,0,0,1,220,98.67V196H188V136a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v60H36ZM180,140v24H132V140Zm-56,24H76V140h48Zm-48,8h48v24H76Zm56,0h48v24H132Z" />
        </G>
      </Svg>
    );
  }

