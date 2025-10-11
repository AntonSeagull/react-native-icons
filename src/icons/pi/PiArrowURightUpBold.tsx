

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowURightUpBold = (props: IconProps) => {

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
          <Path  d="M224.49,88.49a12,12,0,0,1-17,0L180,61V168a68,68,0,0,1-136,0V80a12,12,0,0,1,24,0v88a44,44,0,0,0,88,0V61L128.49,88.49a12,12,0,1,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,224.49,88.49Z" />
        </G>
      </Svg>
    );
  }

