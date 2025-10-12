

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendRightUpBold = (props: IconProps) => {

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
          <Path  d="M208.49,88.49a12,12,0,0,1-17,0L164,61v67A108.12,108.12,0,0,1,56,236a12,12,0,0,1,0-24,84.09,84.09,0,0,0,84-84V61L112.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,208.49,88.49Z" />
        </G>
      </Svg>
    );
  }

