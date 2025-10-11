

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayout = (props: IconProps) => {

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
          <Path d="M0 0v17h17v-17h-17zM1 6h9v10h-9v-10zM16 16h-5v-10h5v10zM1 5v-4h15v4h-15z" fill="#000000" />
        </G>
      </Svg>
    );
  }

