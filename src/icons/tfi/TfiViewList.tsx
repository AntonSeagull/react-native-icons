

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiViewList = (props: IconProps) => {

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
          <Path d="M0 0v4h17v-4h-17zM16 3h-15v-2h15v2zM0 10h17v-4h-17v4zM1 7h15v2h-15v-2zM0 16h17v-4h-17v4zM1 13h15v2h-15v-2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

