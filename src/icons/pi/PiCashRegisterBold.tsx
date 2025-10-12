

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCashRegisterBold = (props: IconProps) => {

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
          <Path  d="M243.61,157,221.17,71a20,20,0,0,0-19.35-15H140V40a20,20,0,0,0-20-20H80A20,20,0,0,0,60,40V56H54.18A20,20,0,0,0,34.83,71L12.39,157a11.94,11.94,0,0,0-.39,3v32a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V160A11.94,11.94,0,0,0,243.61,157ZM84,44h32V56H84ZM57.27,80H198.73l17.74,68H39.53ZM36,188V172H220v16Zm28-72a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H76A12,12,0,0,1,64,116Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,112,116Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,160,116Z" />
        </G>
      </Svg>
    );
  }

