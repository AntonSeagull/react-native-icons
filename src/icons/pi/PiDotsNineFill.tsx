

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDotsNineFill = (props: IconProps) => {

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
          <Path  d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-52A12,12,0,1,1,88,76,12,12,0,0,1,76,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,180,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z" />
        </G>
      </Svg>
    );
  }

