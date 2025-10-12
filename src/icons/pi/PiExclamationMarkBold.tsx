

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiExclamationMarkBold = (props: IconProps) => {

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
          <Path  d="M148,200a20,20,0,1,1-20-20A20,20,0,0,1,148,200Zm-20-40a12,12,0,0,0,12-12V48a12,12,0,0,0-24,0V148A12,12,0,0,0,128,160Z" />
        </G>
      </Svg>
    );
  }

