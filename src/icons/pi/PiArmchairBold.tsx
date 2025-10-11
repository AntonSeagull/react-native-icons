

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArmchairBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M220,78.53V72a44.05,44.05,0,0,0-44-44H80A44.05,44.05,0,0,0,36,72v6.53a52,52,0,0,0,0,99V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V177.51a52,52,0,0,0,0-99ZM80,52h96a20,20,0,0,1,20,20v4.62A52.09,52.09,0,0,0,152.17,124H103.83A52.09,52.09,0,0,0,60,76.62V72A20,20,0,0,1,80,52ZM206.81,155.86A12,12,0,0,0,196,167.8V196H60V167.8a12,12,0,0,0-10.81-11.94A28,28,0,1,1,80,128v36a12,12,0,0,0,24,0V148h48v16a12,12,0,0,0,24,0V128a28,28,0,1,1,30.81,27.86Z" />
        </G>
      </Svg>
    );
  }

