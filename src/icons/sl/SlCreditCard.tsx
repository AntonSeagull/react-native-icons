

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SlCreditCard = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 512, 512)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M928.144 176H95.856c-53.024 0-96 42.976-96 96v480c0 53.024 42.976 96 96 96h832.288c53.024 0 96-42.976 96-96V272c0-53.024-42.976-96-96-96zM95.856 240h832.288c17.664 0 32 14.336 32 32v64H63.856v-64c0-17.664 14.351-32 32-32zm832.288 544H95.856c-17.664 0-32-14.336-32-32V464h896.288v288c0 17.664-14.352 32-32 32z" />
        </G>
      </Svg>
    );
  }

