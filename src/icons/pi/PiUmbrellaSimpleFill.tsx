

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUmbrellaSimpleFill = (props: IconProps) => {

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
          <Path  d="M235.76,138.83A16,16,0,0,1,224,144H136v56a16,16,0,0,0,32,0,8,8,0,0,1,16,0,32,32,0,0,1-64,0V144H32a16,16,0,0,1-16-17.37,112.44,112.44,0,0,1,188.2-72.88A111.56,111.56,0,0,1,240,126.63,16.1,16.1,0,0,1,235.76,138.83Z" />
        </G>
      </Svg>
    );
  }

