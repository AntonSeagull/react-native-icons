

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBasket = (props: IconProps) => {

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
          <Path  fill="none" d="M2,12 L22,12 L20,23 L4,23 L2,12 Z M20,8 L14,1 M4,8 L10,1 M1,8 L23,8 L23,12 L1,12 L1,8 Z M8,15 L8,20 M16,15 L16,20 M12,15 L12,20" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

