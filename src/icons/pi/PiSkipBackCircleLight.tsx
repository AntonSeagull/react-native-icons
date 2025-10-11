

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSkipBackCircleLight = (props: IconProps) => {

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
          <Path  d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM162.91,82.75a6,6,0,0,0-6.09.16L102,117.17V88a6,6,0,0,0-12,0v80a6,6,0,0,0,12,0V138.83l54.82,34.26A6,6,0,0,0,166,168V88A6,6,0,0,0,162.91,82.75ZM154,157.17,107.32,128,154,98.83Z" />
        </G>
      </Svg>
    );
  }

