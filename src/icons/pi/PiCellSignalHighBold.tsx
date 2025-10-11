

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCellSignalHighBold = (props: IconProps) => {

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
          <Path  d="M172,72V200a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm-52,28a12,12,0,0,0-12,12v88a12,12,0,0,0,24,0V112A12,12,0,0,0,120,100ZM80,140a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V152A12,12,0,0,0,80,140ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z" />
        </G>
      </Svg>
    );
  }

