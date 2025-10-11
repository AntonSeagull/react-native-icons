

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumpadFill = (props: IconProps) => {

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
          <Path  d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM80,164a12,12,0,1,1,12-12A12,12,0,0,1,80,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,80,124Zm0-40A12,12,0,1,1,92,72,12,12,0,0,1,80,84Zm48,120a12,12,0,1,1,12-12A12,12,0,0,1,128,204Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,124Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,84Zm48,80a12,12,0,1,1,12-12A12,12,0,0,1,176,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,176,124Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,176,84Z" />
        </G>
      </Svg>
    );
  }

