

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberNineLight = (props: IconProps) => {

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
          <Path  d="M128,42a54,54,0,1,0,19.94,104.17l-33.17,58.88a6,6,0,1,0,10.46,5.89l49.54-88A54,54,0,0,0,128,42Zm0,96a42,42,0,1,1,42-42A42,42,0,0,1,128,138Z" />
        </G>
      </Svg>
    );
  }

