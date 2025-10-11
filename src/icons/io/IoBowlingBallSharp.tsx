

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBowlingBallSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM286,230a28,28,0,1,1,28-28A28,28,0,0,1,286,230Zm8-76a28,28,0,1,1,28-28A28,28,0,0,1,294,154Zm68,44a28,28,0,1,1,28-28A28,28,0,0,1,362,198Z" />
        </G>
      </Svg>
    );
  }

