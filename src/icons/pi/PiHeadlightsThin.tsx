

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHeadlightsThin = (props: IconProps) => {

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
          <Path  d="M164,80a4,4,0,0,1,4-4h72a4,4,0,0,1,0,8H168A4,4,0,0,1,164,80Zm76,92H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0-64H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,32H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8ZM140,64V192a12,12,0,0,1-12,12H88a76,76,0,0,1-76-76.58C12.31,85.83,46.81,52,88.9,52H128A12,12,0,0,1,140,64Zm-8,0a4,4,0,0,0-4-4H88.9C51.19,60,20.28,90.27,20,127.48A68,68,0,0,0,88,196h40a4,4,0,0,0,4-4Z" />
        </G>
      </Svg>
    );
  }

