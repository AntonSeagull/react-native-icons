

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiQuestionMarkBold = (props: IconProps) => {

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
          <Path  d="M196,96c0,29.47-24.21,54.05-56,59.06V156a12,12,0,0,1-24,0V144a12,12,0,0,1,12-12c24.26,0,44-16.15,44-36s-19.74-36-44-36S84,76.15,84,96a12,12,0,0,1-24,0c0-33.08,30.5-60,68-60S196,62.92,196,96Zm-68,92a20,20,0,1,0,20,20A20,20,0,0,0,128,188Z" />
        </G>
      </Svg>
    );
  }

