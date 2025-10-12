

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCodeBlockBold = (props: IconProps) => {

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
          <Path  d="M51.51,104.49l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L45,64,68.49,87.51a12,12,0,0,1-17,17Zm48,0a12,12,0,0,0,17,0l32-32a12,12,0,0,0,0-17l-32-32a12,12,0,1,0-17,17L123,64,99.51,87.51A12,12,0,0,0,99.51,104.49ZM200,36H180a12,12,0,0,0,0,24h16V196H60V140a12,12,0,0,0-24,0v60a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Z" />
        </G>
      </Svg>
    );
  }

