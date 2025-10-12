

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutCtaBtnRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9 7h-7v-1h7v1zM3.993 9h5v-1h-5v1zM17 3v10h-17v-10h17zM16 4h-15v8h15v-8zM15 6h-5v2h5v-2z" />
        </G>
      </Svg>
    );
  }

