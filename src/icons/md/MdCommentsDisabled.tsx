

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdCommentsDisabled = (props: IconProps) => {

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
          <Path  d="M16.83,14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H20c1.1,0,2,0.9,2,2v15.17L16.83,14z M2.1,2.1L0.69,3.51L2,4.83 V16c0,1.1,0.9,2,2,2h11.17l5.31,5.31l1.41-1.41L2.1,2.1z M6,9h0.17l2,2H6V9z M6,14v-2h3.17l2,2H6z" />
        </G>
      </Svg>
    );
  }

