

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoServerOutline = (props: IconProps) => {

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
          <Path  d="M432 112C432 112 432 376.055 432 400C432 444.183 353.202 480 256 480C158.798 480 80 444.183 80 400C80 378.169 80 112 80 112" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
          <Path  d="M432 256C432 300.183 353.202 336 256 336C158.798 336 80 300.183 80 256" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
        </G>
      </Svg>
    );
  }

