

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiXstate = (props: IconProps) => {

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
          <Path  d="M15.891 0h6.023l-6.085 10.563c-1.853-3.305-1.822-7.32.062-10.563zm6.055 23.999L8.078.001H2.055l6.919 12.015L2.055 24h6.023L12 17.236 15.892 24z" />
        </G>
      </Svg>
    );
  }

