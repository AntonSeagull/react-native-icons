

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNewspaperBold = (props: IconProps) => {

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
          <Path  d="M92,108a12,12,0,0,1,12-12h72a12,12,0,0,1,0,24H104A12,12,0,0,1,92,108Zm12,52h72a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24ZM236,64V184a28,28,0,0,1-28,28H36A32,32,0,0,1,4,180V88a12,12,0,0,1,24,0v92a8,8,0,0,0,16,0V64A20,20,0,0,1,64,44H216A20,20,0,0,1,236,64Zm-24,4H68V180a32,32,0,0,1-1,8H208a4,4,0,0,0,4-4Z" />
        </G>
      </Svg>
    );
  }

