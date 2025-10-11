

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSubtractBold = (props: IconProps) => {

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
          <Path  d="M178,78A84,84,0,1,0,78,178,84,84,0,1,0,178,78ZM220,160a60.75,60.75,0,0,1-.38,6.65l-44-44a83.62,83.62,0,0,0,4-19.39A59.83,59.83,0,0,1,220,160ZM36,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,36,96Zm67.28,83.66a83.62,83.62,0,0,0,19.39-4l44,44A60.75,60.75,0,0,1,160,220,59.83,59.83,0,0,1,103.28,179.66Zm88.53,31.18-46.73-46.73a85,85,0,0,0,19-19l46.73,46.73A60.45,60.45,0,0,1,191.81,210.84Z" />
        </G>
      </Svg>
    );
  }

