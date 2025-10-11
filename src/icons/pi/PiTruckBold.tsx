

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTruckBold = (props: IconProps) => {

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
          <Path  d="M255.14,115.54l-14-35A19.89,19.89,0,0,0,222.58,68H196V64a12,12,0,0,0-12-12H32A20,20,0,0,0,12,72V184a20,20,0,0,0,20,20H46.06a36,36,0,0,0,67.88,0h44.12a36,36,0,0,0,67.88,0H236a20,20,0,0,0,20-20V120A21.7,21.7,0,0,0,255.14,115.54ZM196,92h23.88l6.4,16H196ZM80,204a12,12,0,1,1,12-12A12,12,0,0,1,80,204Zm92-41.92A36.32,36.32,0,0,0,158.06,180H113.94a36,36,0,0,0-67.88,0H36V140H172ZM172,116H36V76H172Zm20,88a12,12,0,1,1,12-12A12,12,0,0,1,192,204Zm40-24h-6.06A36.09,36.09,0,0,0,196,156.23V132h36Z" />
        </G>
      </Svg>
    );
  }

