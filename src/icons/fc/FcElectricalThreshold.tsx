

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcElectricalThreshold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="none" stroke="#3F51B5" d="M4,18l4.5-1.5c0.9-0.3,1.9,0.1,2.3,0.9l8.7,14.3 c0.7,1.2,2.4,1.3,3.2,0.2l2.3-2.8c0.5-0.6,1.4-0.9,2.2-0.6l3,1c1,0.3,2.1-0.2,2.5-1.1l4.3-10.1c0.5-1.1,1.9-1.6,2.9-0.9l4,2.7" strokeWidth="4" strokeMiterlimit="10" />
        </G>
      </Svg>
    );
  }

