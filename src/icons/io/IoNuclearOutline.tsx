

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoNuclearOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Line  x1="224" y1="192" x2="171" y2="85" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="288" y1="192" x2="341" y2="85" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="327.55" y1="255.81" x2="446.96" y2="255.94" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="299.09" y1="313.13" x2="371.34" y2="408.19" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="184.45" y1="255.81" x2="65.04" y2="255.94" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="212.91" y1="313.13" x2="140.66" y2="408.19" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

