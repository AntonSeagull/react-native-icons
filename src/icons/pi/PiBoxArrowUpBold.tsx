

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBoxArrowUpBold = (props: IconProps) => {

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
          <Path  d="M226.73,66.63l-16-32A12,12,0,0,0,200,28H56a12,12,0,0,0-10.73,6.63l-16,32A12,12,0,0,0,28,72V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V72A12,12,0,0,0,226.73,66.63ZM192.58,52l6,12H57.42l6-12ZM52,204V88H204V204Zm116.49-68.49a12,12,0,0,1-17,17L140,141v39a12,12,0,0,1-24,0V141l-11.51,11.52a12,12,0,0,1-17-17l32-32a12,12,0,0,1,17,0Z" />
        </G>
      </Svg>
    );
  }

