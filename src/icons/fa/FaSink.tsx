

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaSink = (props: IconProps) => {

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
          <Path  d="M32,416a96,96,0,0,0,96,96H384a96,96,0,0,0,96-96V384H32ZM496,288H400V256h64a16,16,0,0,0,16-16V224a16,16,0,0,0-16-16H384a32,32,0,0,0-32,32v48H288V96a32,32,0,0,1,64,0v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V96A96.16,96.16,0,0,0,300.87,1.86C255.29,10.71,224,53.36,224,99.79V288H160V240a32,32,0,0,0-32-32H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16h64v32H16A16,16,0,0,0,0,304v32a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V304A16,16,0,0,0,496,288Z" />
        </G>
      </Svg>
    );
  }

