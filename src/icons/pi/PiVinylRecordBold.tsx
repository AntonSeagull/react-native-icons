

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiVinylRecordBold = (props: IconProps) => {

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
          <Path  d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-128a44.05,44.05,0,0,0-44,44,12,12,0,0,1-24,0,68.07,68.07,0,0,1,68-68,12,12,0,0,1,0,24Zm68,44a68.07,68.07,0,0,1-68,68,12,12,0,0,1,0-24,44.05,44.05,0,0,0,44-44,12,12,0,0,1,24,0Zm-68,28a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z" />
        </G>
      </Svg>
    );
  }

