

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAirplayBold = (props: IconProps) => {

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
          <Path  d="M137.11,152.19a12,12,0,0,0-18.22,0l-48,56A12,12,0,0,0,80,228h96a12,12,0,0,0,9.11-19.81Zm-31,51.81L128,178.44,149.91,204ZM236,64V176a28,28,0,0,1-28,28h-4a12,12,0,0,1,0-24h4a4,4,0,0,0,4-4V64a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V176a4,4,0,0,0,4,4h4a12,12,0,0,1,0,24H48a28,28,0,0,1-28-28V64A28,28,0,0,1,48,36H208A28,28,0,0,1,236,64Z" />
        </G>
      </Svg>
    );
  }

