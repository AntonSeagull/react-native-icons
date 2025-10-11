

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiContractLeftLine = (props: IconProps) => {

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
          <Path  d="M15.0712 4.92889L16.4854 6.34311L11.8286 11L21.0004 11.0001L21.0004 13.0001L11.8286 13L16.4854 17.6568L15.0712 19.071L8.00016 12L15.0712 4.92889ZM4.00037 18.9999L4.00037 4.99991H6.00037L6.00037 18.9999H4.00037Z" />
        </G>
      </Svg>
    );
  }

