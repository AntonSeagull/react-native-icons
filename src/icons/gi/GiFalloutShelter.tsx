

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiFalloutShelter = (props: IconProps) => {

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
          <Path  d="M256 23C127.425 23 23 127.425 23 256s104.425 233 233 233 233-104.425 233-233S384.575 23 256 23zM149.268 71.287h213.168L256 256h213.17L362.732 440.713 256 256 149.564 440.713 42.83 256H256L149.268 71.287z" />
        </G>
      </Svg>
    );
  }

