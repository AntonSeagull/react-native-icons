

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutCtaBtnLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M15 7h-7v-1h7v1zM8.007 9h5v-1h-5v1zM17 3v10h-17v-10h17zM16 4h-15v8h15v-8zM7 6h-5v2h5v-2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

