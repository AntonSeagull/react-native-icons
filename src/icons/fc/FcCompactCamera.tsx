

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcCompactCamera = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#607D8B" d="M40,39H8c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v22C44,37.2,42.2,39,40,39z" />
          <Path  fill="#90CAF9" d="M33.8,21c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C34.2,22.4,34.3,21.5,33.8,21z" />
        </G>
      </Svg>
    );
  }

