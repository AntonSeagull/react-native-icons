

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRankingThin = (props: IconProps) => {

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
          <Path  d="M116.21,101.26a4,4,0,0,1,2.53-5.05l12-4A4,4,0,0,1,136,96v40a4,4,0,0,1-8,0V101.55l-6.74,2.24A4,4,0,0,1,116.21,101.26ZM244,208a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H28V104A12,12,0,0,1,40,92H84V56A12,12,0,0,1,96,44h64a12,12,0,0,1,12,12v76h44a12,12,0,0,1,12,12v60h12A4,4,0,0,1,244,208Zm-72-68v64h48V144a4,4,0,0,0-4-4ZM92,204h72V56a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4Zm-56,0H84V100H40a4,4,0,0,0-4,4Z" />
        </G>
      </Svg>
    );
  }

