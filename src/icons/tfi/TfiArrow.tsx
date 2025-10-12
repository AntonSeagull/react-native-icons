

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrow = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M13.603 11.349l-0.706-0.708 1.644-1.641h-5.541v5.541l1.641-1.644 0.708 0.706-2.849 2.855-2.849-2.855 0.708-0.706 1.641 1.644v-5.541h-5.541l1.644 1.641-0.706 0.708-2.855-2.849 2.855-2.849 0.706 0.708-1.644 1.641h5.541v-5.541l-1.641 1.644-0.708-0.706 2.849-2.855 2.849 2.855-0.708 0.706-1.641-1.644v5.541h5.541l-1.644-1.641 0.706-0.708 2.855 2.849-2.855 2.849z" />
        </G>
      </Svg>
    );
  }

