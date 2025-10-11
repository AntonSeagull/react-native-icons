

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHeadlightsFill = (props: IconProps) => {

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
          <Path  d="M160,80a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM128,48H88.9C44.62,48,8.33,83.62,8,127.39A80,80,0,0,0,88,208h40a16,16,0,0,0,16-16V64A16,16,0,0,0,128,48Z" />
        </G>
      </Svg>
    );
  }

