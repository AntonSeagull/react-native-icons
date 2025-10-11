

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoContractSharp = (props: IconProps) => {

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
          <Line  x1="314.2" y1="314.23" x2="432" y2="432" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="197.8" y1="197.77" x2="80" y2="80" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="314.23" y1="197.8" x2="432" y2="80" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="197.77" y1="314.2" x2="80" y2="432" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

