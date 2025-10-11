

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCreditCard = (props: IconProps) => {

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
          <Path  fill="none" d="M1,5.00087166 C1,4.4481055 1.43945834,4 2.00246167,4 L21.9975383,4 C22.5511826,4 23,4.44463086 23,5.00087166 L23,18.9991283 C23,19.5518945 22.5605417,20 21.9975383,20 L2.00246167,20 C1.44881738,20 1,19.5553691 1,18.9991283 L1,5.00087166 Z M1,8 L23,8 L23,10 L1,10 L1,8 Z M5,15 L7,15 L7,15.5 L5,15.5 L5,15 Z M10,15 L16,15 L16,15.5 L10,15.5 L10,15 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

