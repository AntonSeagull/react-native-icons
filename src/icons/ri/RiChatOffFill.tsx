

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiChatOffFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2.80777 1.39337L22.6068 21.1924L21.1925 22.6066L17.5846 18.9994L6.45516 19L2.00016 22.5V3.99997C2.00016 3.83067 2.04223 3.6712 2.11649 3.53143L1.39355 2.80759L2.80777 1.39337ZM21.0002 2.99997C21.5524 2.99997 22.0002 3.44769 22.0002 3.99997V17.785L7.21416 2.99997H21.0002Z" />
        </G>
      </Svg>
    );
  }

