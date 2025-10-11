

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrPowerCycle = (props: IconProps) => {

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
          <Path  fill="none" d="M20,8 C18.5343681,5.03213345 15.4860999,3 11.9637942,3 C7.01333514,3 3,7.02954545 3,12 M4,16 C5.4656319,18.9678666 8.51390007,21 12.0362058,21 C16.9866649,21 21,16.9704545 21,12 M9,16 L3,16 L3,22 M21,2 L21,8 L15,8" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

